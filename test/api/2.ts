import { expect } from "chai";
import { SyphonXApi } from "../../api.js";

describe("SyphonXApi/run", () => {

    it("offline1", async () => {
        const api = new SyphonXApi();
        const result = await api.run({
            template: { actions: [{ select: [{ query: [["h1"]] }] }] },
            html: "<h1>Hello</h1>"
        });
        expect(result).to.be.an("object");
        expect(result.data).to.be.an("object");
        expect(result.metrics).to.be.an("object");
        expect(result.ok).to.be.true;
        expect(result.online).to.be.false;
        expect(result.data).to.have.property("value").that.is.a("string").that.equals("Hello");
        expect(result.data).to.have.property("nodes").eql(["body > h1"]);
    });

    it("offline2", async () => {
        const api = new SyphonXApi();
        const result = await api.run({
            template: "examples/example1.json",
            html: "<h1>Hello</h1>"
        });
        expect(result).to.be.an("object");
        expect(result.data).to.be.an("object");
        expect(result.metrics).to.be.an("object");
        expect(result.ok).to.be.true;
        expect(result.online).to.be.false;
        expect(result.data).to.have.property("title").that.is.an("object").that.has.a.property("value").that.equals("Hello");
    });

    //todo: offline test with template path
    //todo: online test
    //todo: online/outside test
    //todo: error tests
    /*
    it("error1", async () => {
        const api = new SyphonXApi();
        const result = await api.run({ template: "examples/example.json" });
        // check for error onExtract not defined
    });
    */

});
