import { expect } from "chai";
import { parseTemplate } from "../../template.js";
import { formatTemplate } from "../common/index.js";

const yaml = `
url: https://www.example.com/
actions:
  - select:
    - name: name
      query: h1
    - name: description
      query: p
    - name: href
      query: $('a').attr('href')
`.trim();

const json = `{
  "url": "https://www.example.com/",
  "actions": [
    {
      "select": [
        {
          "name": "name",
          "query": [["h1"]]
        },
        {
          "name": "description",
          "query": [["p"]]
        },
        {
          "name": "href",
          "query": [["a",["attr","href"]]]
        }
      ]
    }
  ]
}`;

describe("yaml/1", () => {
    it("yaml to json", () => expect(formatTemplate(parseTemplate(yaml))).to.be.equal(json));
});