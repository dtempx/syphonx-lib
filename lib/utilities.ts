export function isFormula(value: unknown): boolean {
    return typeof value === "string" && value.startsWith("{") && value.endsWith("}");
}

export function isObject(obj: unknown): boolean {
    return typeof obj === "object" && obj !== null && !(obj instanceof Array) && !(obj instanceof Date);
}

export function snakeify(key: string, delim = "_") {
    return key.replace(/[A-Z]/g, char => `${delim}${char.toLowerCase()}`)
}
