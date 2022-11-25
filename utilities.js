export class ErrorMessage {
    constructor(message) {
        this.message = message;
    }
}
export function combineUrl(url, path) {
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
export function ltrim(text, pattern) {
    while (text.startsWith(pattern)) {
        text = text.slice(pattern.length);
    }
    return text;
}
export function rtrim(text, pattern) {
    while (text.endsWith(pattern)) {
        text = text.slice(0, -1 * pattern.length);
    }
    return text;
}
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//# sourceMappingURL=utilities.js.map