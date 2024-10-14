const Joi = require("joi");
const path = require("path");
Joi.objectId = require("joi-objectId")(Joi);
const cors = require("cors");
const travel = require("./routes/travel")
const post= require("./routes/post")
const express = require("express");
const app = express();
app.use(express.json());


// database connection
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://marcelinoebied:0123456789@cluster0.8vfd0.mongodb.net/project"
  )

  .then(() => {
    console.log("Db connected");
  })
  .catch((error) => {
    console.error("Couldn't connect to Db", error);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/uploads', express.static('uploads'));
// app.use(cors());


//Travel route
app.use("/travel", travel)
app.use("/post",post)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});