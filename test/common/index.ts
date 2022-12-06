export function formatTemplate(script: unknown): string {
    let text = typeof script === "string" ? script : JSON.stringify(script, null, 2) || "";
    let i = text.indexOf(`"$": [\n`);
    while (i >= 0) {
        i = text.indexOf("[", i);
        const j = matchBrace(text, i, "[]");
        if (j > i) {
            text = `${text.substring(0, i)}${text.substring(i, j).replace(/\s*\[/g, "[").replace(/\s*\]/g, "]").replace(/\[\s*"/g, `["`).replace(/",\s*"/g, `","`)}${text.substring(j)}`;
            i = text.indexOf(`"$": [\n`);
        }
        else {
            break;
        }
    }
    return text;
}

export function matchBrace(text: string, i: number, token: string): number {
    let n = 0;
    while (i++ < text.length) {
        if (text[i] === token[1] && --n < 0) {
            return i + 1;
        }
        else if (text[i] === token[0]) {
            n += 1;
        }
    }
    return -1;
}