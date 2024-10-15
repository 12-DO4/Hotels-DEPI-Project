const Joi = require("joi");
const path = require("path");
Joi.objectId = require("joi-objectId")(Joi);
const cors = require("cors");
const travel = require("./routes/travel")
const post= require("./routes/post")
const express = require("express");
const app = express();
const frontPosts = require("./routes/frontend/post"); 
const frontTravel = require("./routes/frontend/travel"); 
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
app.use(cors());


//Travel route
app.use("/travel", travel)
app.use("/post",post)

app.use('/adminlte', express.static(path.join(__dirname, 'node_modules', 'admin-lte')));
app.set('view engine', 'ejs');

app.get("/post/new", (req, res) => {
  res.render("add_post");
});
app.use('/api/posts', frontPosts);
app.use('/api/travel', frontTravel);
app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules', '@fortawesom', 'fontawesome-free')));


app.get('/travel/new', (req, res) => {
  res.render("add_travel")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});