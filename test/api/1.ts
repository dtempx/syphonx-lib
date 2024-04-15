import * as chai from "chai";
import { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { SyphonXApi } from "../../api.js";

chai.use(chaiAsPromised);

describe("SyphonXApi/templates", () => {
    const api = new SyphonXApi();

    it("loadTemplate('examples/example.json')", async () => {
        const obj = await api.loadTemplate("examples/example.json");
        expect(obj).to.be.an("object");
        expect(obj).to.have.property("template").that.is.an("object");
        expect(obj).to.have.property("contract").that.is.an("object");
        expect(obj.metadata).to.be.an("object").that.is.not.empty;
        expect(obj.metadata).to.have.property("name").that.is.a("string").that.equals("examples/example.json");
        expect(obj.metadata).to.have.property("hash").that.is.a("string").that.matches(/.{22}==/);
        expect(obj.metadata).to.have.property("createdAt").that.is.a("date");
        expect(obj.metadata).to.have.property("modifiedAt").that.is.a("date");
        expect(obj.metadata).to.have.property("contract").that.is.a("string").that.equals("examples/contracts/example.json");
    });

    it("loadTemplate('examples/example.json') (cached)", async () => {
        const obj = await api.loadTemplate("examples/example.json");
        expect(obj).to.be.an("object");
        expect(obj).to.have.property("template").that.is.an("object");
        expect(obj).to.have.property("contract").that.is.an("object");
    });

    it("read('examples/example.json')", async () => {
        const [content, metadata, contract] = await api.read("examples/example.json");
        expect(content).to.be.a("string").that.is.not.empty;
        expect(metadata).to.be.an("object").that.is.not.empty;
        expect(metadata).to.have.property("name").that.is.a("string").that.equals("examples/example.json");
        expect(metadata).to.have.property("hash").that.is.a("string").that.matches(/.{22}==/);
        expect(metadata).to.have.property("size").that.is.a("number").that.is.greaterThan(0);
        expect(metadata).to.have.property("revision").that.is.a("string").that.matches(/^\d+$/);
        expect(metadata).to.have.property("createdAt").that.is.a("date");
        //expect(metadata).to.have.property("createdBy").that.is.a("string");
        expect(metadata).to.have.property("modifiedAt").that.is.a("date");
        //expect(metadata).to.have.property("modifiedBy").that.is.a("string");
        expect(metadata).to.have.property("contract").that.is.a("string").that.equals("examples/contracts/example.json");
        expect(contract).to.be.a("string").that.is.not.empty;
    });
});
