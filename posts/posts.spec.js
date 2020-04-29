const request = require("supertest");
const server = require("../api/server");
const db = require("../data/db-config");

describe("testing api running", () => {
  test("should res.status(200) ", () => {
    return request(server)
      .get("/")
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});

describe("registering in to do test", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  test("testing a user can login", async () => {
    await request(server)
      .post("/api/auth/register")
      .send({
        username: "alex",
        password: "password",
        email: "email@me.com",
        name: "anan",
        age: 14,
        terms: true,
      })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });
});

describe("logginng in to do test", () => {
  test("testing a user can login", async () => {
    await request(server)
      .post("/api/auth/login")
      .send({
        username: "alex",
        password: "password",
      })
      .then((res) => {
        expect(res.body.message).toBe("welcome alex");
      });
  });
});
