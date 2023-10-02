import * as cheerio from "cheerio";
import * as syphonx from "syphonx-core";

export interface TransformOptions {
    html?: string;
    url?: string;
    vars?: Record<string, unknown>;
    debug?: boolean;
    root?: unknown;
}

/**
 * Applies a set of jQuery transforms to the HTML document.
 * @param obj - A string containing HTML to transform or an object with transform options. 
 * @returns The transform result.
 */
export function transform(transforms: syphonx.Transform[], html: string, options: TransformOptions = {}): string | undefined {
    const root = cheerio.load(html);
    syphonx._transform(transforms, { ...options, root });
    return root.html();
}
