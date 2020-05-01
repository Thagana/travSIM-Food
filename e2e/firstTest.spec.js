const { reloadApp } = require("detox-expo-helpers");

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("Example", () => {
  beforeEach(async () => {
    await reloadApp();
    await timeout(30000);
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("SignUpButton"))).tap();
  });
});
