import * as chai from "chai";
import { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { SyphonXApi } from "../../api.js";

chai.use(chaiAsPromised);

describe("SyphonXApi/revisions", () => {
    const api = new SyphonXApi();

    it("revisions", async () => {
        const revisions = await api.revisions("examples/test1.json");
        expect(revisions).to.be.an("array").that.is.not.empty;

        const [metadata] = revisions;
        expect(metadata).to.have.property("name").that.is.a("string").that.equals("examples/test1.json");
        expect(metadata).to.have.property("hash").that.is.a("string").that.matches(/.{22}==/);
        expect(metadata).to.have.property("size").that.is.a("number").that.is.greaterThan(0);
        expect(metadata).to.have.property("revision").that.is.a("string").that.matches(/^\d+$/);
        expect(metadata).to.have.property("createdAt").that.is.a("date");
        //expect(metadata).to.have.property("createdBy").that.is.a("string");
        expect(metadata).to.have.property("modifiedAt").that.is.a("date");
        //expect(metadata).to.have.property("modifiedBy").that.is.a("string");
    });

    it("revision", async () => {
        const [content, metadata] = await api.read("examples/test1.json", "1685642500593772");
        expect(content).to.be.a("string").that.is.not.empty;
        expect(metadata).to.be.an("object").that.is.not.empty;
        expect(metadata).to.have.property("name").that.is.a("string").that.equals("examples/test1.json");
        expect(metadata).to.have.property("hash").that.is.a("string").that.equals("pg4zAFDkkYmLSkSzmyK1Ww==");
        expect(metadata).to.have.property("size").that.is.a("number").that.equals(370);
        expect(metadata).to.have.property("revision").that.is.a("string").that.equals("1685642500593772");
        expect(metadata).to.have.property("createdAt").that.is.a("date");
        //expect(metadata).to.have.property("createdBy").that.is.a("string");
        expect(metadata).to.have.property("modifiedAt").that.is.a("date");
        //expect(metadata).to.have.property("modifiedBy").that.is.a("string");
    });
});
