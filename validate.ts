import { ExtractErrorCode, ExtractState } from "syphonx-core";
import { Schema, Validator } from "jsonschema";
import { snakeify, unwrap } from "./lib/index.js";

/**
 * Validates the extract state data using the specified data contract schema.
 * @param state Extract state containing data to validate against the data contract.
 * @param schema A JSON schema the represents the data contract.
 * @returns An updated extract state.
 * @description
 * Modifies the input extract state in place and also returns it.
 */
export function validate(state: ExtractState, schema: Schema): ExtractState {
    const validator = new Validator();
    const data = unwrap(state.data);
    const { errors } = validator.validate(data, schema);
    for (const error of errors) {
        const code = `contract-${snakeify(error.name)}` as ExtractErrorCode;
        const message = error.stack.replace(/^(instance\b)/, "Object");
        state.errors.push({ code, message, level: 1 });
    }
    return state;
}
