import * as yaml from "js-yaml";
import JSON5 from "json5";
import { Schema } from "jsonschema";
import { Template } from "syphonx-core";
import { combineUrl, ErrorMessage } from "./utilities.js";
import { yamlToJson } from "./yaml.js";

const storageUrl = "https://storage.googleapis.com/syphonx/";

/**
 * @deprecated Use SyphonXApi instead.
 */
export async function fetchTemplate(file: string): Promise<Template> {
    if (typeof file !== "string" || !file.startsWith("$"))
        throw new ErrorMessage(`Invalid file path specified: ${file}`);

    const number = new Date().getMinutes().toString();
    const url = combineUrl(storageUrl, file.slice(1)) + `?t=${number}`;
    const response = await fetch(url);
    if (!response.ok)
        throw new ErrorMessage(`Failed to fetch template: ${file}, status=${response.status}`, response.status.toString());

    const text = await response.text();
    const template = parseTemplate(text);
    return template;
}

/**
 * @deprecated Use SyphonXApi instead.
 */
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
        throw new ErrorMessage("Failed to parse template, invalid argument.");
    }

    if (text.trim().startsWith("{") && text.trim().endsWith("}")) {
        const obj = JSON5.parse(text);
        return obj as Template;
    }
    else if (text === "") {
        return { actions: [] };
    }
    else {
        const obj = yaml.load(text) as any;
        const template = yamlToJson(obj);
        return template;
    }
}

export function parseContract(text: unknown): Schema | undefined {
    if (typeof text === "string") {
        try {
            return JSON5.parse(text);
        }
        catch (err) {}
    }
}
