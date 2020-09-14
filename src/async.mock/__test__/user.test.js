import axios from "axios";
import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    verifyPassword.mockImplementation(() => true);
    verifyUsername.mockImplementation(() => true);
    axios.post.mockResolvedValue({
      data: "success",
    });
    await expect(register("true Name", "true password")).resolves.toEqual(
      "success"
    );
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyPassword.mockImplementation(() => true);
    verifyUsername.mockImplementation(() => false);
    await expect(register("fake Name", "true password")).rejects.toThrow(
      "wrong username or password"
    );
  });
});
