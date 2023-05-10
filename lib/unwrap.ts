import { isObject } from "./utilities.js";

/**
 * Unwraps a data object by converting name/object to name/value pairs.
 * @param obj The input data object with name/object pairs.
 * @returns A data object with name/value paris.
 */
export function unwrap(obj: unknown): unknown {
    if (obj instanceof Array) {
        return obj.map(item => unwrap(item));
    }
    else if (isObject(obj) && typeof (obj as {}).hasOwnProperty === "function" && (obj as {}).hasOwnProperty("value")) {
        return unwrap((obj as { value: unknown }).value);
    }
    else if (isObject(obj)) {
        const source = obj as Record<string, unknown>;
        const target = {} as Record<string, unknown>;
        for (const key of Object.keys(obj as {})) {
            if (isObject(source[key])) {
                if ((source![key] as { value: unknown }).value !== undefined)
                    target[key] = unwrap((source[key] as { value: unknown }).value); // unwrap value
                else
                    target[key] = null;
            }
        }
        return target;
    }
    else {
        return obj;
    }
}

/**
 * This function is deprecated, use `unwrap` instead.
 * @deprecated
 */
export function removeDOMRefs(obj: unknown): unknown {
    return unwrap(obj);
}
