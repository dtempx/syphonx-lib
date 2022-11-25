import * as yaml from "js-yaml";
import JSON5 from "json5";
import { combineUrl, ErrorMessage } from "./utilities.js";
import { yamlToJson } from "./yaml.js";
const storageUrl = "https://storage.googleapis.com/syphonx/";
export async function fetchTemplate(file) {
    if (typeof file !== "string" || !file.startsWith("$")) {
        throw new ErrorMessage("Invalid file path specified");
    }
    const url = combineUrl(storageUrl, file.slice(1));
    const response = await fetch(url);
    const text = await response.text();
    const template = parseTemplate(text);
    return template;
}
export async function fetchTemplateSource(file) {
    if (typeof file !== "string" || !file.startsWith("$")) {
        throw new ErrorMessage("Invalid file path specified");
    }
    const url = combineUrl(storageUrl, file.slice(1));
    const response = await fetch(url);
    const text = await response.text();
    return text;
}
export function parseTemplate(text) {
    if (typeof text !== "string") {
        throw new ErrorMessage("Failed to parse template");
    }
    if (text.trim().startsWith("{") && text.trim().endsWith("}")) {
        const obj = JSON5.parse(text);
        return obj;
    }
    else {
        const obj = yaml.load(text);
        const template = yamlToJson(obj);
        return template;
    }
}
//# sourceMappingURL=template.js.map