const express = require("express");
const router = express.Router();
const { User, handleUserValidation } = require("../models/User");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const dotenv = require("dotenv");

dotenv.config();

router.post("/addAdmin", async (req, res) => {
  const { errors } = handleUserValidation(req.body);

  // Handling validation errors
  if (errors) {
    const errorMessages = errors.details.map((err) => err.message);
    return res.render("addAdmin", { errors: errorMessages });
  }

  // Checking if the user already exists
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.render("addAdmin", {
      errors: ["Admin with this email already exists."],
    });
  }

  // Creating new admin
  const salt = await bcrypt.genSalt(+process.env.SALT_ROUNDS || 10);
  user = new User(_.pick(req.body, ["name", "phone", "email", "password"]));
  user.password = await bcrypt.hash(user.password, salt);
  user.role = "admin";

  console.log(await bcrypt.hash("123456789", salt))

  // Saving in db & Redirecting
  try {
    await user.save();
    const token = user.generateAuthToken();
    res.header("x-auth-token", token).redirect("/admins");
  } catch (error) {
    res
      .status(500)
      .render("addAdmin", {
        errors: ["Internal server error. Please try again later."],
      });
  }
});

module.exports = router;
