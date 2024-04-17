import * as chai from "chai";
import { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { SyphonXApi } from "../../api.js";

chai.use(chaiAsPromised);

describe("SyphonXApi/loadTemplate", () => {
    const api = new SyphonXApi();

    it("loadTemplate", async () => {
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

    it("loadTemplate-cached", async () => {
        const obj = await api.loadTemplate("examples/example.json");
        expect(obj).to.be.an("object");
        expect(obj).to.have.property("template").that.is.an("object");
        expect(obj).to.have.property("contract").that.is.an("object");
    });
});
