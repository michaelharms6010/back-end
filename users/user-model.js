const db = require("../data/db-config");
module.exports = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
  editUser,
};

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").where({ id });
}

function addUser(newUser) {
  return db("users").insert(newUser, "id");
}

function removeUser(id) {
  return db("users")
    .where({ id })
    .delete({ id })
    .then(() => {
      return { id };
    });
}

function editUser(changes, id) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(() => {
      return { id };
    });
}
