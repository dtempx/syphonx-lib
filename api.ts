import JSON5 from "json5";
import { request } from "./lib/index.js";
import { parseTemplate } from "./template.js";
import { JSONSchema7 } from "json-schema";
import { Template } from "syphonx-core";

const defaultUrl = "https://syphonx-35w5m5egbq-uc.a.run.app";

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
 * Represents the template file information.
 */
export interface TemplateFileInfo {
    /** The template content. */
    template: Template;
    /** The optional contract associated with the template. */
    contract?: JSONSchema7;
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
     * Reads the content of a file from the store.
     *
     * @param file - The file path to read from.
     * @returns A Promise resolving to the file content as a string.
     */    
    async read(file: string): Promise<string> {
        if (file.startsWith("/"))
            file = file.slice(1);
    
        const headers = this.headers;
        const { url } = await request.json(`${this.url}/template/${file}?read`) as { url: string };
        const content = await request.text(url, { headers });
        return content;
    }
    
    /**
     * Retrieves the template file information.
     *
     * @param file - The file path to retrieve the template information from.
     * @returns A Promise resolving to a TemplateFileInfo object.
     */
    async template(file: string): Promise<TemplateFileInfo> {
        if (file.startsWith("/"))
            file = file.slice(1);

        const headers = this.headers;
        const data = await request.json(`${this.url}/template/${file}`, { headers }) as any;
        const { url, contract } = data;
        const template = await request.text(url);
        return {
            template: parseTemplate(template),
            contract: tryParseJSON(contract)
        };
    }
    
    /**
     * Writes content to a file in the store.
     *
     * @param file - The file path to write to.
     * @param content - The content to write to the file.
     * @returns A Promise resolving when the write operation is complete.
     */    
    async write(file: string, content: string): Promise<void> {
        if (file.startsWith("/"))
            file = file.slice(1);

        const headers = this.headers;
        const { url } = await request.json(`${this.url}/template/${file}?write`) as { url: string };
        await request.putJson(url, content, { headers });
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
