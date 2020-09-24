import axios from "axios";
import getUsers from "../users";

jest.mock("axios");
// TODO feedback: 使用import导入default就好了

// const { default: getUsers } = require("../users");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    axios.get.mockResolvedValue({
      data: "success",
    });
    await expect(getUsers()).resolves.toBe("success");
  });
});
