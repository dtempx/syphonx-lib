export class ErrorMessage extends Error {
    code?: string;
    constructor(message: string, code?: string) {
        super(message);
        this.code = code;
    }
}

export function combineUrl(...parts: string[]): string {
    let url = parts.shift() || "";
    let path = parts.shift();
    while (path) {
        url = `${rtrim(url, "/")}/${ltrim(path, "/")}`;
        path = parts.shift();
    }
    return url;
}

export function ltrim(text: string, pattern: string): string {
    while (text.startsWith(pattern)) {
        text = text.slice(pattern.length);
    }
    return text;
}

export function rtrim(text: string, pattern: string): string {
    while (text.endsWith(pattern)) {
        text = text.slice(0, -1 * pattern.length)
    }
    return text;
}

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
