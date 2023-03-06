import { expect } from "chai";
import { fetchTemplate, Template } from "../../template.js";

describe("fetch/1", () => {
    let template: Template | undefined = undefined;
    before(async () => template = await fetchTemplate("$/examples/example.json"));
    it("actions has expected length", () => expect(template?.actions).to.have.length(1));
});