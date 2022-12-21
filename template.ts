import * as yaml from "js-yaml";
import JSON5 from "json5";
import * as syphonx from "syphonx-core";
import { combineUrl, ErrorMessage } from "./utilities.js";
import { yamlToJson } from "./yaml.js";

export interface Template {
    actions: syphonx.Action[];
    url?: string;
    key?: string;
    params?: Record<string, unknown>;
    useragent?: string;
    headers?: Record<string, string>;
    viewport?: { width: number, height: number };
    waitUntil?: syphonx.DocumentLoadState | syphonx.DocumentLoadState[] | undefined;
    timeout?: number;
}

const storageUrl = "https://storage.googleapis.com/syphonx/";

export async function fetchTemplate(file: string): Promise<Template> {
    if (typeof file !== "string" || !file.startsWith("$")) {
        throw new ErrorMessage("Invalid file path specified");
    }
    const url = combineUrl(storageUrl, file.slice(1));
    const response = await fetch(url);
    const text = await response.text();
    const template = parseTemplate(text);
    return template;
}

export async function fetchTemplateSource(file: string): Promise<string> {
    if (typeof file !== "string" || !file.startsWith("$")) {
        throw new ErrorMessage("Invalid file path specified");
    }
    const url = combineUrl(storageUrl, file.slice(1));
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

export function parseTemplate(text: string): Template {
    if (typeof text !== "string") {
        throw new ErrorMessage("Failed to parse template");
    }

    if (text.trim().startsWith("{") && text.trim().endsWith("}")) {
        const obj = JSON5.parse(text);
        return obj as Template;
    }
    else {
        const obj = yaml.load(text) as any;
        const template = yamlToJson(obj);
        return template;
    }
}