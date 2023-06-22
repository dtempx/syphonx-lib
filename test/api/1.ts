import * as chai from "chai";
import { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { SyphonXApi } from "../../api.js";

chai.use(chaiAsPromised);

describe("SyphonXApi", () => {
    const api = new SyphonXApi();

    describe("templates", () => {
        it("can download template /examples/example.json", async () => {
            const obj = await api.template("/examples/example.json");
            expect(obj).to.be.an("object");
            expect(obj).to.have.property("template");
            expect(obj.template).to.be.an("object");
        });
    });
});
