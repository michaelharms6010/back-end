const express = require("express");
const router = express.Router();
const Posts = require("./posts-model");

router.get("/", (req, res) => {
  Posts.getPosts()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      console.log("error getting posts", err);
      res.status(500).json({ error: "error getting posts" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Posts.getPostsById(id)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(500).json({ error: "error getting post by id" });
      console.log("messed up getting post by id", err);
    });
});

router.get("/:id/comments", (req, res) => {
  const { id } = req.params;
  Posts.getCommentsForCertainPost(id)
    .then((arrOfComments) => res.status(200).json(arrOfComments))
    .catch((err) =>{
      console.log(err)
      res.status(500).json({ message: "unexpected error for database" })
    });
});

router.post("/", (req, res) => {
  const newPost = req.body;
  Posts.addPost(newPost)
    .then((post) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      console.log("messed up adding a post", err);
      res.status(500).json({ error: "error adding a post" });
    });
});

router.delete("/:id", idValidation, (req, res) => {
  const { id } = req.params;
  Posts.removePost(id)
    .then((post) => {
      res.status(200).json({ message: "post deleted" });
    })
    .catch((err) => {
      console.log("messed up getting deleting a post", err);
      res.status(500).json({ message: "error deleting a post" });
    });
});

router.put("/:id", postUpdateValidation, idValidation, (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  Posts.editPost(changes, id)
    .then((edits) => {
      res.status(201).json({ message: "edit successful", changes });
    })
    .catch((err) => {
      res.status(500).json("error editing a user");
      console.log("messed up editing a user", err);
    });
});

/// MIDDLEWARE FUNCTIONS
function postValidation(req, res, next) {
  req.body.post && req.body.id
    ? next()
    : res.status(400).json({ message: "need to add a post in the body" });
}

function postUpdateValidation(req, res, next) {
  req.body.post || req.body.caption
    ? next()
    : res.status(400).json({ message: "need to add a post in the body" });
}

function idValidation(req, res, next) {
  const { id } = req.params;
  Posts.getPostsById(id)
    .then((post) =>
      post
        ? next()
        : res.status(404).json({ message: "that post does not exist" })
    )
    .catch((err) => {
      res.status(500).json({ message: "unexpected problem with database" });
    });
}

module.exports = router;
