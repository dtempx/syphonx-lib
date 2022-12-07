import * as syphonx from "syphonx-core";
import { Template } from "./template.js";
import { ErrorMessage } from "./utilities.js";
import jsep, { Expression, CallExpression, MemberExpression } from "jsep";


function addSelectAction(template: Template, obj: unknown) {
    if (typeof obj === "string")
        template.actions.push({ select: [{ query: parseMultiQuery(obj) }] });
    else if (obj instanceof Array)
        template.actions.push({ select: obj.map(select => convertSelect(select)) });
    else if (typeof obj === "object" && obj !== null)
        template.actions.push({ select: [convertSelect(obj as Record<string, unknown>)] });
    else
        throw new ErrorMessage("Invalid select action");
}

function convertActions(actions: unknown): syphonx.Action[] {
    if (actions instanceof Array) {
        return actions
            .map(action => {
                if (action.select)
                    return convertSelectAction(action.select);
                else if (action.click)
                    return convertClickAction(action.click);
                else if (action.transform)
                    return convertTransformAction(action.transform);
                else if (action.waitfor)
                    return convertWaitForAction(action.waitfor);
                else if (action.each)
                    return convertEachAction(action.each);
                else if (action.repeat)
                    return convertRepeatAction(action.repeat);
                else
                    return action;
            })
            .filter(action => action !== undefined);
    }
    else {
        return [];
    }
}

function convertClick(obj: unknown): syphonx.Click | undefined {
    if (typeof obj === "string") {
        return { query: parseMultiQuery(obj) };
    }
    else if (typeof obj === "object" && obj !== null) {
        const { query, ...click } = obj as Record<string, unknown>;
        click.query = parseMultiQuery(query);
        return click as unknown as syphonx.Click;    
    }
}

function convertClickAction(obj: unknown): syphonx.ClickAction | undefined {
    const click = convertClick(obj);
    if (click)
        return { click };
}

function convertEachAction(obj: Record<string, unknown>): syphonx.EachAction {
    const { query, actions, ...each } = obj;
    each.query = parseMultiQuery(query);
    each.actions = convertActions(actions);
    return { each } as unknown as syphonx.EachAction;
}

function convertRepeatAction(obj: Record<string, unknown>): syphonx.RepeatAction {
    const { actions, ...repeat } = obj;
    repeat.actions = convertActions(actions);
    return { repeat } as unknown as syphonx.RepeatAction;
}

function convertSelect(obj: Record<string, unknown>): syphonx.Select {
    const { query, ...select } = obj;
    select.query = parseMultiQuery(query);
    if (select.select instanceof Array)
        select.select = select.select.map(obj => convertSelect(obj));
    return select;
}

function convertSelectAction(obj: Record<string, unknown>[]): syphonx.SelectAction | undefined {
    const select = obj.map(obj => {
        const { query, ...select } = obj;
        select.query = parseMultiQuery(query);
        if (select.select instanceof Array)
            select.select = select.select.map(obj => convertSelect(obj));
        return select;        
    });
    return { select };
}

function convertTransform(obj: Record<string, unknown>): syphonx.Transform {
    const { query, ...transform } = obj;
    transform.query = parseSingleQuery(query);
    return transform as unknown as syphonx.Transform;
}

function convertTransformAction(obj: Record<string, unknown>[]): syphonx.TransformAction {
    const transform = obj.map(obj => convertTransform(obj));
    return { transform };
}

function convertWaitForAction(obj: string | Record<string, unknown>): syphonx.WaitForAction {
    if (typeof obj === "string") {
        return { waitfor: { query: parseMultiQuery(obj) } };
    }
    else {
        const { query, ...waitfor } = obj;
        waitfor.query = parseMultiQuery(query);
        return { waitfor };
    }
}

function parseMultiQuery(obj: unknown): syphonx.SelectQuery[] {
    if (typeof obj === "string") {
        if (obj.startsWith("$("))
            return [parseJQueryExpression(obj)];
        else
            return [[obj]];
    }
    else {
        throw new ErrorMessage(`Invalid query expression ${JSON.stringify(obj)}`);
    }
}

function parseSingleQuery(obj: unknown): syphonx.SelectQuery {
    if (typeof obj === "string") {
        if (obj.startsWith("$("))
            return parseJQueryExpression(obj);
        else
            return [obj];
    }
    else {
        throw new ErrorMessage(`Invalid query expression ${JSON.stringify(obj)}`);
    }
}

function parseJQueryExpression(text: string): syphonx.SelectQuery {
    const result = [];
    let expression: Expression | undefined = jsep(text);
    while (expression) {
        if (expression.type === "CallExpression") {
            const callExpression = expression as CallExpression;
            if (callExpression.callee.type === "Identifier" && callExpression.callee.name === "$" && callExpression.arguments.length > 0) {
                result.unshift(callExpression.arguments[0].value);
                expression = undefined;
            }
            else if (callExpression.callee.type === "MemberExpression") {
                const memberExpression = callExpression.callee as MemberExpression;
                result.unshift([memberExpression.property.name, ...callExpression.arguments.map(obj => obj.value)]);
                expression = memberExpression.object;
            }
            else {
                throw new ErrorMessage("Invalid selector");
            }
        }
    }
    return result as syphonx.SelectQuery;
}

export function yamlToJson(obj: any) {
    const { select, actions, ...props } = obj;
    const template: Template = {
        ...props,
        actions: convertActions(actions)
    };
    if (select)
        addSelectAction(template, select);
    return template;
}
