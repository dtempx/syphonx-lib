import { matchBrace } from "./matchBrace.js";

export function formatTemplate(script: unknown): string {
    let text = typeof script === "string" ? script : JSON.stringify(script, null, 2) || "";
    let i = text.indexOf(`"query": [\n`);
    while (i >= 0) {
        i = text.indexOf("[", i);
        const j = matchBrace(text, i, "[]");
        if (j > i) {
            text = `${text.substring(0, i)}${text.substring(i, j).replace(/\s*\[/g, "[").replace(/\s*\]/g, "]").replace(/\[\s*"/g, `["`).replace(/",\s*"/g, `","`)}${text.substring(j)}`;
            i = text.indexOf(`"query": [\n`);
        }
        else {
            break;
        }
    }
    return text;
}
