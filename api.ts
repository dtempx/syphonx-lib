import JSON5 from "json5";
import { isFormula, merge, request, MemCache, Timer } from "./lib/index.js";
import { parseTemplate } from "./template.js";
import { Schema } from "jsonschema";
import { unwrap, Metrics, Template } from "syphonx-core";
import { ErrorMessage } from "./utilities.js";
import { validate } from "./validate.js";
import { evaluateFormula } from "syphonx-core";
import * as cheerio from "cheerio";
import * as syphonx from "syphonx-core";

const defaultUrl = "https://api.syphonx.io";
const templateCacheTTL = 5 * 60 * 1000; // 5 minutes
const memcache = new MemCache();

/**
 * Represents the accessible directories and features associated with an API key.
 */
export interface Auth {
    [key: string]: any;
    /** The name of the authenticated user. */
    name: string;
    /** List of accessible directories with read permissions. */
    read: string[];
    /** List of accessible directories with write permissions. */
    write: string[];
    /** List of accessible directories with delete permissions. */
    delete: string[];
    /** List of accessible features. */
    features: string[];
}

export interface FileMetadata {
    /** The storage name of the contract. */
    name: string;
    /** An MD5 hash of the contract file contents. Used to determine whether the contract has changed since last read. */
    hash: string;
    /** The storage name of the contract associated with a template. */
    contract?: string;
    /** Date contract was created. */
    createdAt: Date;
    /** Date contract was last modified. */
    modifiedAt: Date;
}

/**
 * Identifies the type of informaation to be logged.
 */
export type LogDataType = "error";

/**
 * Represents information to be logged.
 */
export interface LogData extends Record<string, unknown> {
    /** The key for the log data type. */
    key: LogDataType;
}

export interface RunOptions extends Omit<syphonx.HostOptions, "template"> {
    /** Cloud path to template or a template document. */
    template: Template | string;
    /** A contract document to validate extracted data. */
    contract?: Schema;
    /** HTML content for extracting data offline. */
    html?: string;
    /** In an online case, forces the data extraction to be performed outside of the browser by extracting the HTML and processing the template offline. */
    outside?: boolean;
}

/**
 * Represents a file or folder in the store.
 */
export interface StoreFile {
    /** The name of the file or folder. */
    name: string;
    /** The last modified timestamp of the file or folder. */
    timestamp: Date;
    /** The type of the object, either a file or a folder. */
    type: "folder" | "file";
    /** The size of the file or folder in bytes. */
    size: number;
    /** The hash of the file or folder. */
    hash: string;
    /** The access level granted for the file or folder. */
    access: "read" | "write" | "delete";
}

/**
 * Represents storage infomration associated with a template.
 */
export interface LoadTemplateResult {
    /** The template content. */
    template: Template;
    /** The optional contract associated with the template. */
    contract?: Schema;
    /** Information on the stored file. */
    metadata: FileMetadata;
}

/**
 * Provides access for reading and writing templates and contracts in the SyphonX cloud store,
 * as well as access to additional SyphonX features available on the cloud.
 */
export class SyphonXApi {
    apiKey?: string;
    headers?: Record<string, string>;
    url: string;

    /**
     * Constructs a new instance of the SyphonX API.
     *
     * @param apiKey - The API key to authenticate with the SyphonX API.
     * @param url - The base URL of the SyphonX API. Defaults to the `defaultUrl`.
     */
    constructor(apiKey?: string, url?: string) {
        this.apiKey = apiKey;
        if (apiKey)
            this.headers = { "Authorization": `Bearer ${this.apiKey}` };
        this.url = url || defaultUrl;
        if (this.url.endsWith("/"))
            this.url = this.url.slice(0, -1);
    }

    /**
     * Returns information about what the API key is authorized to do.
     *
     * @returns A Promise resolving to the Auth object.
     */
    async auth(): Promise<Auth> {
        const headers = this.headers;
        const auth = await request.json(`${this.url}/auth`, { headers });
        return auth;
    }

    /**
     * Generates a selector given the HTML and context.
     *
     * @param html - The HTML string to process.
     * @param context - The context for the autoselection.
     * @returns A Promise resolving to the selected selector.
     */
    async autoselect(html: string, context = ""): Promise<string> {
        const headers = this.headers;
        const result = await request.json(`${this.url}/autoselect`, { headers }) as { selector: string };
        return result.selector;
    }

    /**
     * Deletes a file from the cloud.
     * 
     * @param name - The storage path of the file to delete.
     */
    async delete(name: string): Promise<void> {
        if (name.startsWith("/"))
            name = name.slice(1);
        const headers = this.headers;
        const { url } = await request.json(`${this.url}/template/${name}?delete`) as { url: string };
        await request.delete(url, { headers });
    }
    
    /**
     * Retrieves the list of accessible files and folders in the store.
     *
     * @returns A Promise resolving to an array of accessible store files.
     */
    async directory(): Promise<StoreFile[]> {
        const headers = this.headers;
        const files = await request.json(`${this.url}/templates`, { headers }) as StoreFile[];
        files.forEach(file => file.timestamp = new Date(file.timestamp));
        return files;    
    }

    /**
     * Retrieves a template and its associated contract from the cloud.
     *
     * @param name - The storage path of the template to retrieve.
     * @returns A Promise resolving to a TemplateFileInfo object.
     */
    async loadTemplate(name: string): Promise<LoadTemplateResult> {
        if (name.startsWith("/"))
            name = name.slice(1);

        const cachedResult = memcache.read(name) as LoadTemplateResult;
        if (cachedResult)
            return cachedResult;

        const headers = this.headers;
        const data = await request.json(`${this.url}/template/${name}`, { headers });

        const result = {
            template: parseTemplate(data.json),
            contract: tryParseJSON(data.contract),
            metadata: {
                name: data.name,
                contract: data.contractName,
                hash: data.hash,
                createdAt: new Date(data.createdAt),
                modifiedAt: new Date(data.modifiedAt)        
            }
        };
        memcache.write(name, result, templateCacheTTL);
        return result;
    }

    /**
     * Logs data to the SyphonX API.
     *
     * @param data - The LogData object to be logged.
     * @returns A Promise resolving to a boolean indicating whether the log was successful.
     */
    async log(data: LogData): Promise<boolean> {
        try {
            const headers = this.headers;
            await request.postJson(`${this.url}/log`, data, { headers });
            return true;
        }
        catch (err) {
            return false;
        }
    }
    
    /**
     * Reads the content of a file from cloud storage.
     *
     * @param name - The storage path of the file to read.
     * @returns A Promise resolving to a tuple with the file content and metadata.
     */
    async read(name: string): Promise<[string, FileMetadata]> {
        if (name.startsWith("/"))
            name = name.slice(1);
        const headers = this.headers;
        const obj = await request.json(`${this.url}/template/${name}?read`, { headers });
        const content = await request.text(obj.url, { headers });
        const metadata = {
            name: obj.name,
            hash: obj.hash,
            contract: obj.contractName,
            createdAt: new Date(obj.createdAt),
            modifiedAt: new Date(obj.modifiedAt)
        };
        return [content, metadata];
    }

    /**
     * Runs in a browser or offline environment extracting data using the specified template. Optionally validates the extracted data against the specified contract.
     * @param options - The options for the extraction. 
     * @returns The extraction result.
     */
    async run({ template, contract, html, outside, ...options }: RunOptions): Promise<syphonx.ExtractResult> {
        if (typeof template === "string") {
            const obj = await this.loadTemplate(template);
            template = obj.template;
            contract = obj.contract;
        }

        const timer = new Timer();
        if (outside) {
            if (!options.onNavigate)
                throw new Error("onNavigate not defined");
    
            if (!options.onHtml)
                throw new Error("onHtml not defined");
    
            let url = options.url || template.url;
            if (!url || typeof url !== "string")
                throw new Error("url not specified");
    
            const params = merge(template.params, options.params); // options.params overrides template.params
            const timeout = typeof template.timeout === "number" ? template.timeout * 1000 : undefined;
            const waitUntil = template.waitUntil;

            if (isFormula(url))
                url = encodeURI(evaluateFormula(url.slice(1, -1), { params }) as string);

            const navigationResult = await options.onNavigate({ url, timeout, waitUntil });
            const html = await options.onHtml();
            const root = cheerio.load(html);
            let state = {
                ...template,
                url,
                params,
                vars: {},
                debug: options.debug || template.debug,
                root
            } as syphonx.ExtractState;
            state.vars.__status = navigationResult?.status;
            state = await syphonx.extract(state);

            if (contract)
                validate(state, contract);

            const metrics = state.vars.__metrics as Metrics;
            metrics.elapsed = timer.elapsed();
            metrics.errors = state.errors?.length ?? 0;

            return {
                ok: true,
                status: navigationResult?.status,
                html,
                ...state,
                data: options.unwrap ? unwrap(state.data) : state.data,
                metrics,
                online: false
            };
        }
    
        if (!html) {
            const result = await syphonx.host({ template, ...options });

            if (contract)
                validate(result as unknown as syphonx.ExtractState, contract);

            result.metrics = result.vars.__metrics as Metrics;
            result.metrics.elapsed = timer.elapsed();
            result.metrics.errors = result.errors?.length ?? 0;

            return result;
        }
        else {
            const root = cheerio.load(html);
            const state = await syphonx.extract({ ...template, root } as syphonx.ExtractState);

            if (contract)
                validate(state, contract);

            const metrics = state.vars.__metrics as Metrics;
            metrics.elapsed = timer.elapsed();
            metrics.errors = state.errors?.length ?? 0;
    
            return {
                ok: true,
                ...state,
                data: options.unwrap ? unwrap(state.data) : state.data,
                metrics,
                online: false
            };
        }
    }

    /**
     * @deprecated Use `loadTemplate` instead.
     */
    async template(name: string): Promise<{ template: string, contract?: string }> {
        if (name.startsWith("/"))
            name = name.slice(1);
        const headers = this.headers;
        const data = await request.json(`${this.url}/template/${name}`, { headers }) as any;
        const { url, contract } = data;
        const template = await request.text(url);
        return { template, contract };
    }

    /**
     * Writes content to a file in the store.
     *
     * @param name - The storage path of the file to write.
     * @param content - The content to write to the file.
     * @param hash - The hash of the existing file content. Must match to overwrite existing file or an error will result. Leave unspecified for new file creation.
     * @returns A Promise resolving when the write operation is complete.
     */
    async write(name: string, content: string, hash?: string): Promise<void> {
        if (name.startsWith("/"))
            name = name.slice(1);
        const headers = this.headers;
        const file = await request.json(`${this.url}/template/${name}?write`);
        if (hash && hash !== file.hash)
            throw new ErrorMessage(`File ${name} has been modified since last save`);
        await request.putJson(file.url, content, { headers });
    }    
}

function tryParseJSON(text: unknown): any {
    if (typeof text === "string") {
        try {
            return JSON5.parse(text);
        }
        catch (err) {}
    }
}
