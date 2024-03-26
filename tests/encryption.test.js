const { encrypt, decryption } = require("../services/encryptionService");

describe("enceyptService test", () => {
  it("encrypt", async () => {
    expect(await encrypt("aaa")).toHaveProperty(
      "message",
      "successfully encrypted"
    );
  });

  it("  decrypt", async () => {
    expect(
      await decryption(
        "aaa",
        "$2b$10$IQYS8iExjwbXssZ0f4pAKOw6bA.FpMHg.Mp1sBjwwReXK25Jj0yNG"
      )
    ).toHaveProperty("message", "successfully decrypted");
  });
  it(" failed decrypt", async () => {
    expect(
      await decryption(
        "aaa",
        "$2b$10$IQYS8iExjwbXssZ0f4pAKOw6bdfsA.FpMHg.Mp1sBjwwReXK25Jj0yNG"
      )
    ).toHaveProperty("message", "failed");
  });
});
