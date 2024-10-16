const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");

router.post("/", async (req, res) => {
  // running validation on body request
  const { error } = handleAuthValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }

  try {
    // check user existence
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send("Invalid Credentials");

    // check password
    let validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).send("Invalid Credentials");
    }

    // generating token
    const token = user.generateAuthToken();
    res.header("x-auth-token", token).redirect("/travel");
  } catch (error) {
    res.status(500).send("Internal Server Error: ", error);
  }
});

// validating inputs for authentication process
function handleAuthValidation(user) {
  const schema = Joi.object({
    email: Joi.string().email().min(10).max(225).required(),
    password: Joi.string().min(8).max(1024).required(),
  });
  return schema.validate(user, { abortEarly: false });
}

module.exports = router;
