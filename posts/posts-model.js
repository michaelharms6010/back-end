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
  .join('users', 'posts.user_id','users.id')
  .select('post.id', 'users.username','posts.post','posts.caption','posts.date')
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
