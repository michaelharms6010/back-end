const db = require("../data/db-config");

module.exports = {
  getPosts,
  getPostsById,
  addPost,
  removePost,
  editPost,
  getCommentsForCertainPost
};

function getPosts() {
  return db("posts")
}

function getPostsById(id) {
  return db("posts").where({ id });
}

function addPost(newPost) {
  return db("posts").insert(newPost, "id");
}

function removePost(id) {
  return db("posts").where({ id }).delete();
}

function editPost(changes, id) {
  return db("posts").where({ id }).update(changes);
}

function getCommentsForCertainPost(id){
    return db('comments').where({post_id : id})
}
