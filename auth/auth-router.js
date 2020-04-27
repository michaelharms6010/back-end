const router = require("express").Router();
const bycrpt = require("bcryptjs");
const secrets = require("./secrets");
const jwt = require("jsonwebtoken");
// need data models

// register endpoint
router.post("/register", (req, res) => {});

// login endpoint
router.post("/login", (req, res) => {});

// token maker function
function tokenMaker(newUser) {
  const payload = {};

  const secret = secrets.jwtSecret;

  const options = {
    expires: "1d",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
