const express = require("express");
const server = express();
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const postRouter = require('../posts/posts-router.js');
const commentRouter = require('../comments/comments-Router.js');
const helmet = require('helmet');
const cors = require('cors');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/posts', postRouter);
server.use('/api/comments', commentRouter);

module.exports = server;