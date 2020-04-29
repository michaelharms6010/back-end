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
  test("testing a user can register", async () => {
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

describe("testing posts endpoints", () => {
  let token;
  beforeEach(async () => {
    const response = await request(server).post("/api/auth/login").send({
      username: "alex",
      password: "password",
    });
    token = response.body.token;
  });

  test("should return posts", () => {
    return request(server)
      .get("/api/posts")
      .set({ Authorization: token })
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toBe(res.body);
      });
  });
  test("should return post by id", () => {
    return request(server)
      .get("/api/posts/1")
      .set({ Authorization: token })
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toBe(res.body);
      });
  });
  test("should add a post", () => {
    return request(server)
      .post("/api/posts")
      .set({ Authorization: token })
      .send({ post: "imgUrl", caption: "this is  a caption" })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });

  test("should edit a post", () => {
    return request(server)
      .put("/api/posts/1")
      .set({ Authorization: token })
      .send({ caption: "THIS CAPTION HAS CHANGED" })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });
  test("should delete a post", () => {
    return request(server)
      .delete("/api/posts/3 ")
      .set({ Authorization: token })
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});
