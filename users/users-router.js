const express = require("express");
const router = express.Router();
const Users = require("./user-model");

router.get("/", (req, res) => {
  Users.getUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: "error getting data" });
      console.log("you messed up getting the users", err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.getUserById(id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "user not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "error retrieving user" });
      console.log("you messed up gettting the user via id", err);
    });
});

router.post("/", (req, res) => {
  const newUser = req.body;
  Users.addUser(newUser)
    .then((user) => {
      res.status(201).json({ message: "new user added", newUser });
    })
    .catch((err) => {
      res.status(500).json({ error: "error adding a user" });
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Users.removeUser(id)
    .then((removed) => {
      if (removed) {
        res.json({ message: " user has beem removed" });
      } else {
        res.status(404).json({ message: "user could not be found" });
      }
    })
    .catch((err) => {
      console.log("you messed up deleting a user", err);
      res.status(500).json({ error: "error deleting a user" });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  Users.editUser(changes, id)
    .then((edits) => {
      res.status(201).json({ message: "edit successful", changes });
    })
    .catch((err) => {
      res.status(500).json("error editing a user");
      console.log("messed up editing a user", err);
    });
});

module.exports = router;
