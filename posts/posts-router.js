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
      console.log("messed up gettin gpost by id", err);
    });
});

router.post("/", (req, res) => {});

module.exports = router;
