import { ErrorMessage } from "./utilities.js";
import jsep from "jsep";
function addClickAction(template, obj) {
    if (typeof obj === "string")
        template.actions.push({ click: { query: parseMultiQuery(obj) } });
    else if (typeof obj === "object" && obj !== null)
        template.actions.push({ click: convertClick(obj) });
    else
        throw new ErrorMessage("Invalid click action");
}
function addSelectAction(template, obj) {
    if (typeof obj === "string")
        template.actions.push({ select: [{ query: parseMultiQuery(obj) }] });
    else if (obj instanceof Array)
        template.actions.push({ select: obj.map(select => convertSelect(select)) });
    else if (typeof obj === "object" && obj !== null)
        template.actions.push({ select: [convertSelect(obj)] });
    else
        throw new ErrorMessage("Invalid select action");
}
function addSnoozeAction(template, obj) {
}
function addTransformAction(template, obj) {
    if (typeof obj === "string")
        template.actions.push({ transform: [{ query: parseSingleQuery(obj) }] });
    else if (obj instanceof Array)
        template.actions.push({ transform: obj.map(obj => ({ query: parseSingleQuery(obj) })) });
    else if (typeof obj === "object" && obj !== null)
        template.actions.push({ transform: [convertTransform(obj)] });
    else
        throw new ErrorMessage("Invalid transform action");
}
function addWaitForAction(template, obj) {
    if (typeof obj === "string")
        template.actions.push({ waitfor: { query: parseMultiQuery(obj) } });
    else if (typeof obj === "object" && obj !== null)
        template.actions.push(convertWaitForAction(obj));
    else
        throw new ErrorMessage("Invalid click action");
}
function convertActions(actions) {
    if (actions instanceof Array) {
        return actions.map(action => {
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
        });
    }
    else {
        return [];
    }
}
function convertClick(obj) {
    const { query, ...click } = obj;
    click.$ = parseMultiQuery(query);
    return click;
}
function convertClickAction(obj) {
    const click = convertClick(obj);
    return { click };
}
function convertEachAction(obj) {
    const { query, actions, ...each } = obj;
    each.$ = parseMultiQuery(query);
    each.actions = convertActions(actions);
    return { each };
}
function convertRepeatAction(obj) {
    const { actions, ...repeat } = obj;
    repeat.actions = convertActions(actions);
    return { repeat };
}
function convertSelect(obj) {
    const { query, ...select } = obj;
    select.$ = parseMultiQuery(query);
    if (select.select instanceof Array)
        select.select = select.select.map(obj => convertSelect(obj));
    return select;
}
function convertSelectAction(objs) {
    const select = objs.map(obj => {
        const { query, ...select } = obj;
        select.$ = parseMultiQuery(query);
        if (select.select instanceof Array)
            select.select = select.select.map(obj => convertSelect(obj));
        return select;
    });
    return { select };
}
function convertTransform(obj) {
    const { query, ...transform } = obj;
    transform.$ = parseSingleQuery(query);
    return transform;
}
function convertTransformAction(objs) {
    const transform = objs.map(obj => convertTransform(obj));
    return { transform };
}
function convertWaitForAction(obj) {
    const { query, ...waitfor } = obj;
    waitfor.$ = parseMultiQuery(query);
    return { waitfor };
}
function parseMultiQuery(obj) {
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
function parseSingleQuery(obj) {
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
function parseJQueryExpression(text) {
    const result = [];
    let expression = jsep(text);
    while (expression) {
        if (expression.type === "CallExpression") {
            const callExpression = expression;
            if (callExpression.callee.type === "Identifier" && callExpression.callee.name === "$" && callExpression.arguments.length > 0) {
                result.unshift(callExpression.arguments[0].value);
                expression = undefined;
            }
            else if (callExpression.callee.type === "MemberExpression") {
                const memberExpression = callExpression.callee;
                result.unshift([memberExpression.property.name, ...callExpression.arguments.map(obj => obj.value)]);
                expression = memberExpression.object;
            }
            else {
                throw new ErrorMessage("Invalid selector");
            }
        }
    }
    return result;
}
export function yamlToJson(obj) {
    const template = {
        url: obj.url,
        actions: obj.actions instanceof Array ? convertActions(obj.actions) : []
    };
    if (obj.click)
        addClickAction(template, obj.click);
    if (obj.each)
        template.actions.push(obj.each);
    if (obj.repeat)
        template.actions.push(obj.repeat);
    if (obj.params)
        template.params = obj.params;
    if (obj.select)
        addSelectAction(template, obj.select);
    if (obj.snooze)
        addSnoozeAction(template, obj.snooze);
    if (obj.transform)
        addTransformAction(template, obj.transform);
    if (obj.waitfor)
        addWaitForAction(template, obj.waitfor);
    return template;
}
//# sourceMappingURL=yaml.js.map