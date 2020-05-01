const express = require("express");
const server = express();
const authRouter = require("../auth/auth-router.js");
const postRouter = require("../posts/posts-router.js");
const commentRouter = require("../comments/comments-Router.js");
const helmet = require("helmet");
const cors = require("cors");
const authorizationMiddleware = require("../auth/auth.js"); //put in as middleware for the users/posts/comments endpoints before deploying and make sure it work correctly
const expressFileUpload = require('express-fileupload');

server.use(expressFileUpload({
  useTempFiles: true
}));
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/auth", authRouter);
server.use("/api/posts", authorizationMiddleware, postRouter);
server.use("/api/comments", authorizationMiddleware, commentRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "the API is up" });
});

module.exports = server;
