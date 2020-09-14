import axios from "axios";

jest.mock("axios");
const { default: getUsers } = require("../users");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    axios.get.mockResolvedValue({
      data: "success",
    });
    await expect(getUsers()).resolves.toBe("success");
  });
});
