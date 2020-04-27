const db = require("../data/db-config");

module.exports = {
  getPosts,
  getPostsById,
};

function getPosts() {
  return db("posts");
}

function getPostsById(id) {
  return db("posts").where({ id });
}

function addPost(newPost) {}
