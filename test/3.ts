import { expect } from "chai";
import { parseTemplate } from "../template.js";
import { formatTemplate } from "./common/index.js";

const yaml = `
actions:
  - click: button
  - waitfor: h1
  - select:
    - name: title
      query: h1
    - name: description
      query: p
`.trim();

const json = `{
  "actions": [
    {
      "click": {
        "$": [["button"]]
      }
    },
    {
      "waitfor": {
        "$": [["h1"]]
      }
    },
    {
      "select": [ 
        {
          "name": "name",
           "$": [["h1"]]
        },
        {
          "name": "description",
          "$": [["p"]]
        },
      ]
    }
  ]
}`;

describe("3", () => {
    it("yaml to json", () => expect(formatTemplate(parseTemplate(yaml))).to.be.equal(json));
});