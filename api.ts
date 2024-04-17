import { isFormula, merge, request, MemCache, Timer } from "./lib/index.js";
import { parseContract, parseTemplate } from "./template.js";
import { Schema } from "jsonschema";
import { unwrap, Metrics, Template } from "syphonx-core";
import { ErrorMessage } from "./utilities.js";
import { validate } from "./validate.js";
import { evaluateFormula } from "syphonx-core";
import * as cheerio from "cheerio";
import * as syphonx from "syphonx-core";

const defaultUrl = process.env.SYPHONX_API_URL || "https://api.syphonx.io";
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
    /** The storage name of the file. */
    name: string;
    /** An MD5 hash of the file contents. Used to determine whether the file has changed since last read. */
    hash: string;
    /** A unique identifier for the revision. */
    revision: string;
    /** The file size in bytes. */
    size: string;
    /** The storage name of the contract associated with a template. */
    contract?: string;
    /** Date file was created. */
    createdAt: Date;
    /** Identifies user who created the file.  */
    createdBy?: string;
    /** Date file was last modified. */
    modifiedAt: Date;
    /** Identifies user who modified the file.  */
    modifiedBy?: string;
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
 * Represents the options for listing a template directory.
 */
export interface DirectoryOptions {
    /** The path to the directory to list, lists from the root if not specified. */
    path?: string;
    /** Filter the result using the specified regular expression. */
    regex?: string;
    /** Filter the result using the specified file globbing pattern. */
    glob?: string;
    /** Filter the result using the specified url. */
    url?: string;
}

/**
 * Represents the options for constructing the SyphonX API object.
 */
export interface SyphonXApiOptions {
    /** Override the SyphonX API URL. Defaults to api.syphonx.io. */
    url?: string;
    /** Specifies the app version. */
    appVersion?: string;
}

/**
 * Provides access for reading and writing templates and contracts in the SyphonX cloud store,
 * as well as access to additional SyphonX features available on the cloud.
 */
export class SyphonXApi {
    key?: string;
    headers?: Record<string, string>;
    url: string;

    /**
     * Constructs a new instance of the SyphonX API.
     *
     * @param key - The API key to authenticate with the SyphonX API.
     * @param options - Additional options for the SyphonX API.
     */
    constructor(key?: string, options?: SyphonXApiOptions) {
        let { url, appVersion } = typeof options === "object" ? options : {} as SyphonXApiOptions;
        if (typeof arguments[1] === "string")
            url = arguments[1];

        this.key = key;
        this.headers = {};

        this.url = url || defaultUrl;
        if (this.url.endsWith("/"))
            this.url = this.url.slice(0, -1);

        if (key)
            this.headers["Authorization"] = `Bearer ${this.key}`;
        if (appVersion)
            this.headers["X-App-Version"] = appVersion;
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
        const file = await request.json(`${this.url}/template/${name}?delete`, { headers });
        await request.delete(file.signedUrl);
    }

    /**
     * Retrieves the list of accessible files and folders in the store.
     *
     * @returns A Promise resolving to an array of accessible store files.
     */
    async directory({ path = "", ...options }: DirectoryOptions = {}): Promise<StoreFile[]> {
        if (path.startsWith("/"))
            path = path.slice(1);
        const headers = this.headers;
        let url = `${this.url}/templates/${path}`;
        if (options.regex)
            url += `?regex=${encodeURIComponent(options.regex)}`;
        else if (options.glob)
            url += `?glob=${encodeURIComponent(options.glob)}`;
        else if (options.url)
            url += `?url=${encodeURIComponent(options.url)}`;
        const files = await request.json(url, { headers }) as StoreFile[];
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

        const cached = memcache.read(name) as LoadTemplateResult;
        if (cached)
            return cached;

        const headers = this.headers;
        const data = await request.json(`${this.url}/template/${name}`, { headers });

        const result = {
            template: parseTemplate(data.json),
            contract: parseContract(data.contract),
            metadata: createMetadata(data)
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
     * @param revision - Optional key of the file revision to read, loads the latest revision if not specified.
     * @returns A Promise resolving to a tuple with the file content, metadata, and associated contract.
     */
    async read(name: string, revision?: string): Promise<[string, FileMetadata, string]> {
        if (name.startsWith("/"))
            name = name.slice(1);
        const headers = this.headers;
        const file = await request.json(`${this.url}/template/${name}?read${revision ? `&revision=${revision}`: ""}`, { headers });
        const content = await request.text(file.signedUrl);
        const metadata = createMetadata(file);
        return [content, metadata, file.contract];
    }

    /**
     * Reads the list of revisions of a file from cloud storage.
     * 
     * @param name - The storage path of the file to read.
     * @returns A Promise resolving to a list of revisions for the file.
     */
    async revisions(name: string): Promise<FileMetadata[]> {
        if (name.startsWith("/"))
            name = name.slice(1);
        const headers = this.headers;
        const files = await request.json(`${this.url}/revisions/${name}`, { headers }) as FileMetadata[];
        return files.map(file => createMetadata(file));
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
        const file = await request.json(`${this.url}/template/${name}`, { headers }) as any;
        const template = await request.text(file.signedUrl);
        return { template, contract: file.contract };
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
        const file = await request.json(`${this.url}/template/${name}?write`, { headers });
        if (hash && hash !== file.hash)
            throw new ErrorMessage(`File ${name} has been modified since last save`);
        await request.putJson(file.signedUrl, content, { headers: file.signedHeaders });
    }    
}

function createMetadata(obj: any) {
    return {
        name: obj.name,
        hash: obj.hash,
        revision: obj.revision,
        size: obj.size,
        contract: obj.contractName,
        createdAt: new Date(obj.createdAt),
        createdBy: obj.createdBy,
        modifiedAt: new Date(obj.modifiedAt),
        modifiedBy: obj.modifiedBy
    };
}