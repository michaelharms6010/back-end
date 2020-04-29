const request = require("supertest");
const server = require("../api/server");
const db = require("../data/db-config");

describe("logging in to do test", () => {
  test("testing a user can login", async () => {
    await request(server)
      .post("/auth/login")
      .send({ username: "username1", password: "password1" })
      .then((res) => {
        expect(res.status).toBe();
      });
  });
});

describe("testing posts", () => {
  test("should return posts and res.status(200) ", () => {
    return request(server)
      .get("/")
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});
