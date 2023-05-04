import * as chai from "chai";
import { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { fetchTemplate } from "../../template.js";
import { ErrorMessage } from "../../utilities.js";

chai.use(chaiAsPromised);

describe("fetch/2", () => {
    it("throws an error when file does not exist", async () => {
        await expect(fetchTemplate("$/examples/xxzzy.json"))
            .to.be.rejectedWith(ErrorMessage)
            .and.eventually.have.property("code", "404");
    });
});