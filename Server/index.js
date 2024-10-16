const Joi = require("joi");
const path = require("path");
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

Joi.objectId = require("joi-objectId")(Joi);

const travel = require("./routes/travel");
const post = require("./routes/post");
const user = require("./routes/user");
const auth = require("./routes/auth");
const frontPosts = require("./routes/frontend/post");
const frontTravel = require("./routes/frontend/travel");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(cors());

// database connection
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Db connected");
  })
  .catch((error) => {
    console.error("Couldn't connect to Db", error);
  });

// Routes
app.use("/travel", travel);
app.use("/post", post);
app.use("/api/travel", frontTravel);
app.use("/api/posts", frontPosts);
app.use("/api/register", user);
app.use("/api/login", auth);

// static files for font-awesome & LTE-Admin
app.use(
  "/fontawesome",
  express.static(
    path.join(__dirname, "node_modules", "@fortawesom", "fontawesome-free")
  )
);
app.use(
  "/adminlte",
  express.static(path.join(__dirname, "node_modules", "admin-lte"))
);
app.set("view engine", "ejs");

// Rendering views
app.get("/travel/new", (_req, res) => {
  res.render("add_travel");
});
app.get("/post/new", (_req, res) => {
  res.render("add_post");
});
app.get("/register", (_req, res) => {
  res.render("register");
});
app.get("/login", (_req, res) => {
  res.render("login");
});

// running server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});
