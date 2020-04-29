const db = require("../data/db-config");
module.exports = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
  editUser,
  login
};

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").where({ id });
}

function addUser(newUser) {
  return db("users").insert(newUser, 'id').then( userId => {
    return getUserById(userId[0])
  });
}

function removeUser(id) {
  return db("users").where({ id }).delete({ id });
}

function editUser(changes, id) {
  return db("users").where({ id }).update(changes);
}

function login(username){
  return db("users").where({ username })
}
