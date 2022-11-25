export class ErrorMessage {
    message: string;
    constructor(message: string) {
        this.message = message;
    }
}

export function combineUrl(url: string, path: string): string {
    if (url && path) {
        return `${rtrim(url, "/")}/${ltrim(path, "/")}`;
    }
    else if (url) {
        return url;
    }
    else if (path) {
        return path;
    }
    else {
        return "";
    }
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
