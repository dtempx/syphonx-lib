import * as syphonx from "syphonx-core";

export function renderJQuery(query: syphonx.SelectQuery): string | undefined {
    const valid = query instanceof Array && query.length > 0 && typeof query[0] === "string" && query.slice(1).every(op => op instanceof Array);
    if (valid) {
        const selector = query[0];
        const ops = query.slice(1) as syphonx.SelectQueryOp[];
        return [`$("${selector}")`, ...ops.map(op => `${op[0]}(${op.slice(1).map(param => JSON.stringify(param)).join(", ")})`)].join(".");
    }
}