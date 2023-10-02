import * as cheerio from "cheerio";
import * as syphonx from "syphonx-core";
import { unwrap } from "syphonx-core";

export interface SelectOptions {
    html?: string;
    url?: string;
    vars?: Record<string, unknown>;
    debug?: boolean;
    context?: string;
    root?: unknown;
    unwrap?: boolean;
}

/**
 * Selects data from an HTML document.
 * @param obj - A string containing HTML to select or an object with select options. 
 * @returns The extraction result.
 */
export function select(selects: syphonx.Select[], html: string, options: SelectOptions = {}): syphonx.ExtractState {
    const root = cheerio.load(html);
    const state = syphonx._select(selects, { ...options, root });
    return {
        ...state,
        data: options.unwrap ? unwrap(state.data) : state.data
    };
}
