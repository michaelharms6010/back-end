const express = require("express");
const router = express.Router();
const Comments = require("./comments-model.js");

router.get("/", (req, res) => {
  Comments.getComments()
    .then((comments) => {
      res.status(200).json(comments);
    })
    .catch((err) => {
      res.status(500).json({ message: "unexpected problem with database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Comments.getCommentById(id)
    .then((comment) => {
      comment
        ? res.status(200).json(comment)
        : res
            .status(400)
            .json({ message: "comment with that id doesnt exist" });
    })
    .catch((err) => {
      res.status(500).json({ message: "unexpected problem with database" });
    });
});

router.post("/", bodyValidation, (req, res) => {
  const comment = req.body;
  Comments.postComment(comment)
    .then((comment) => {
      comment
        ? Comments.getCommentById(comment[0])
            .then((comment) => res.status(201).json(comment))
            .catch((err) => {
              res
                .status(500)
                .json({ message: "unexpected problem with database" });
            })
        : res.status(404).json({ message: "comment was not created" });
    })
    .catch((err) => {
      res.status(500).json({ message: "unexpected problem with database" });
    });
});

router.put("/:id", bodyUpdateValidation, idValidation, (req, res) => {
  const { id } = req.params;
  const comment = req.body;
  Comments.editComment(id, comment)
    .then((comment) =>
      comment > 0
        ? Comments.getCommentById(id)
            .then((comment) => res.status(200).json(comment))
            .catch((err) =>
              res
                .status(500)
                .json({ message: "unexpected error with the database" })
            )
        : res
            .status(400)
            .json({ message: "message not updated check id and body" })
    )
    .catch((err) =>
      res.status(500).json({ message: "unexpected error with the database" })
    );
});

router.delete("/:id", idValidation, (req, res) => {
  const { id } = req.params;
  Comments.deleteComment(id).then((number) =>
    number > 0
      ? Comments.getComments()
          .then((comments) => res.status(200).json(comments))
          .catch((err) =>
            res.status(500).json({ message: "unexpected error with database" })
          )
      : res.status(404).json({ message: "that comments doesnt exist" })
  );
});

function bodyValidation(req, res, next) {
  console.log(req.body.post_id)
  req.body.comment && req.body.post_id
    ? next()
    : res.status(400).json({ message: "need to add a comment in the body" });
}

function bodyUpdateValidation(req, res, next) {
  req.body.comment
    ? next()
    : res.status(400).json({ message: "need to add a comment in the body" });
}

function idValidation(req, res, next) {
  const { id } = req.params;
  Comments.getCommentById(id)
    .then((comment) =>
      comment
        ? next()
        : res.status(404).json({ message: "that comment does not exist" })
    )
    .catch((err) => {
      res.status(500).json({ message: "unexpected problem with database" });
    });
}

module.exports = router;
