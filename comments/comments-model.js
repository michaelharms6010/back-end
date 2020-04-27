const db = require("../data/db-config.js");

module.exports = {
  getComments,
  getCommentById,
  postComment,
  editComment,
  deleteComment,
};

function getComments() {
  return db("comments");
}

function getCommentById(id) {
  return db("comments").where({ id }).first();
}

function postComment(comment) {
  return db("comments").insert(comment);
}

function editComment(id, comment) {
  return null;
}

function deleteComment(id) {
  return null;
}
