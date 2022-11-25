import * as syphonx from "syphonx-core";
export interface Template {
    actions: syphonx.Action[];
    url?: string;
    key?: string;
    params?: Record<string, unknown>;
    useragent?: string;
    headers?: Record<string, string>;
    viewport?: {
        width: number;
        height: number;
    };
    waitUntil?: syphonx.DocumentLoadState | syphonx.DocumentLoadState[] | undefined;
    timeout?: number;
}
export declare function fetchTemplate(file: string): Promise<Template>;
export declare function fetchTemplateSource(file: string): Promise<string>;
export declare function parseTemplate(text: string): Template;
