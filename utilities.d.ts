export declare class ErrorMessage {
    message: string;
    constructor(message: string);
}
export declare function combineUrl(url: string, path: string): string;
export declare function ltrim(text: string, pattern: string): string;
export declare function rtrim(text: string, pattern: string): string;
export declare function sleep(ms: number): Promise<void>;
