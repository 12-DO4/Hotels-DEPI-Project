const { update } = require("lodash");
const { Post, handlePostValidation } = require("../models/post");
const upload = require('../routes/image_uploader');
const express = require("express");
const router = express.Router();


router.get("/new",async (req, res) => {
    res.render("add_post", { errors: [], post: {}});
  });
//get posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.render("posts", { posts });
});

//get post by id
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("view_post", { post });
})

//add post
router.post('/', upload.single('Img'), async (req, res) => {
    const { error } = handlePostValidation(req.body);
    if (error) {
        const errorMsg = error.details.map((error) => error.message);
        return res.status(400).render('add_post', { errors: errorMsg, post: req.body});
    }

    if (!req.file) {
        res.status(400).send("Post img is required");
    }
    const postImgPath= req.file.path.replace(/\\/g, '/'); 
    let post = new Post({
        comments:req.body.comments,
        title:req.body.title,
        description: req.body.description,
        Img: postImgPath,
    });

    try {
        post = await post.save();
        res.status(201).redirect("/post");
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});


//delete post
router.delete('/:id', async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    console.log(post);
    if (!post)
        return res.status(404).send('Post not found');
    return res.status(200).send(post);
})


router.get("/:id/edit", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).send("Post not found");
      }
      // Pass the course data and authors to the edit form
      res.render("edit_post", { errors: [], post: post});
    } catch (err) {
      res.status(500).send("An error occurred while fetching post");
    }
  });


//update post
router.put('/:id', upload.single('Img'), async (req, res) => {
    const { error } = handlePostValidation(req.body);
    if (error) {
        const errorMsg = error.details.map((error) => error.message);
        return res.status(400).render('edit_post', { errors: errorMsg, post: req.body});
    }
    let post = await Post.findById(req.params.id);
    if (!post)
        return res.status(404).send('The post with the given ID was not found');

    const updatedData = {
        comments:req.body.comments,
        title:req.body.title,
        description: req.body.description,
    }
    if (req.file){
        req.body.Img = req.file.path.replace(/\\/g, '/');
        updatedData.Img = req.file.path;
    }
        

    post = await Post.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).send(post);
});

module.exports = router;