import { expect } from "chai";
import { unwrap } from "../../lib/index.js";

describe("unwrap/1", () => {
    const data = unwrap({
        "a": {
            "key": "a",
            "value": "Hello",
            "nodes": ["h1"]
        },
        "b": {
            "key": "b",
            "nodes": []
        },
        "c": null
    }) as Record<string, unknown>;
    it("a has expected value", () => expect(data.a).equals("Hello"));
    it("b has expected value", () => expect(data.b).equals(null));
    it("c has expected value", () => expect(data.c).equals(null));
});
