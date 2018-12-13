let MyContract = artifacts.require("MyContract");

contract("MyContract", () => {
  let mc;

  beforeEach(async () => {
    mc = await MyContract.new();
  })

  describe("testFunction", () => {
    it("costs this much to run^", async () => {
      const tx = await mc.testFunction("test");
      console.log("\t", tx.receipt.gasUsed)
    })
  })

  describe("testModifier", () => {
    it("costs this much to run^", async () => {
      const tx = await mc.testModifier("test");
      console.log("\t", tx.receipt.gasUsed)
    })
  })

  describe("setWithEquality", () => {
    it("costs this much to run^", async () => {
      const tx = await mc.setWithEquality("test");
      console.log("\t", tx.receipt.gasUsed)
    })
  })

  describe("setWithoutEquality", () => {
    it("costs this much to run^", async () => {
      const tx = await mc.setWithoutEquality("test");
      console.log("\t", tx.receipt.gasUsed)
    })
  })
})