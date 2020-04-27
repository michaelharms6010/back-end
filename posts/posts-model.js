const db = require("../data/db-config");

module.exports = {
  getPosts,
  getPostsById,
  addPost,
  removePost,
  editPost,
};

function getPosts() {
  return db("posts");
}

function getPostsById(id) {
  return db("posts").where({ id });
}

function addPost(newPost) {
  return db("posts").insert(newPost);
}

function removePost(id) {
  return db("posts").where({ id }).delete();
}
function editPost(changes, id) {
  return db("posts").where({ id }).update(changes);
}
