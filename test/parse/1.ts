import { expect } from "chai";
import { parseTemplate, Template } from "../../template.js";

const json = `
{
  "actions": [
    {
      "select": [
        {
          "query": [
            [
              "h1"
            ]
          ]
        }
      ]
    }
  ],
  "selected": "select.1"
}
`;

describe("parse/1", () => {
    let template: Template | undefined = undefined;
    before(() => template = parseTemplate(json));
    it("actions has expected length", () => expect(template?.actions).to.have.length(1));
});
