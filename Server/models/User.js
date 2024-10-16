const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  phone: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 11,
  },
  email: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
  // timestamps are to be added
});

// generating token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this.id, fullname: this.fullname, role: this.role },
    process.env.SECRET_JWT
  );
  return token;
};

const User = mongoose.model("User", userSchema);

// running joi validations
function handleUserValidation(user) {
  const schema = Joi.object({
    fullname: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(11).max(11).required(),
    email: Joi.string().email().min(10).max(225).required(),
    password: Joi.string().min(8).max(1024).required(),
  });
  return schema.validate(user, { abortEarly: false });
}

exports.User = User;
exports.handleUserValidation = handleUserValidation;
