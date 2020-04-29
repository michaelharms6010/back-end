const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db-config.js");

describe("registering in to do test", () => {
  // just in case you need to truncate the database before testing
  //   beforeEach(async () => {
  //     await db("users").truncate();
  //   });
  test("testing a user can register", async () => {
    await request(server)
      .post("/api/auth/register")
      .send({
        username: "bob",
        password: "password",
        email: "email@a.com",
        name: "bob",
        age: 32,
        terms: true,
      })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });
  test("testing a user can login", async () => {
    await request(server)
      .post("/api/auth/login")
      .send({
        username: "bob",
        password: "password",
      })
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.message).toBe("welcome bob");
      });
  });
});
