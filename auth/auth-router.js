const router = require("express").Router();
const bycrpt = require("bcryptjs");
const secrets = require("./secrets");
const jwt = require("jsonwebtoken");
// need data models

// register endpoint
router.post("/register", (req, res) => {
  let user = req.body;
  const rounds = process.env.HASH_ROUNDS || 8;
  const hash = bycrypt.hashSync(user.password, rounds);
  user.password = hash;
  Users.adduser(user).then((newUser) => {
    res.status(201).json(user);
  });
});

// login endpoint
router.post("/login", (req, res) => {});

// token maker function
function tokenMaker(newUser) {
  const payload = {
    userId: newUser.id,
    userName: newUser.username,
  };

  const secret = secrets.jwtSecret;

  const options = {
    expires: "1d",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
