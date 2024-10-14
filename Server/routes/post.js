const { update } = require("lodash");
const { Post, handlePostValidation } = require("../models/post");
const upload = require('../routes/image_uploader');
const express = require("express");
const router = express.Router();

//get posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
});

//get post by id
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.send(post);
})

//add post
router.post('/', upload.single('Img'), async (req, res) => {
    const { error } = handlePostValidation(req.body);
    if (error) {
        const errorMsg = error.details.map((error) => error.message);
        return res.status(400).send(errorMsg);
    }

    if (!req.file) {
        res.status(400).send("Post img is required");
    }

    let post = new Post({
        comments:req.body.comments,
        title:req.body.title,
        description: req.body.description,
        Img: req.file.path,
    });

    try {
        post = await post.save();
        res.status(201).send(post);
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

//update post
router.put('/:id', upload.single('Img'), async (req, res) => {
    const { error } = handlePostValidation(req.body);
    if (error) {
        const errorMsg = error.details.map((error) => error.message);
        return res.status(400).send(errorMsg);
    }
    let post = await Post.findById(req.params.id);
    if (!post)
        return res.status(404).send('post not found');

    const updatedData = {
        comments:req.body.comments,
        title:req.body.title,
        description: req.body.description,
    }
    if (req.file)
        updatedData.Img = req.file.path;

    post = await Post.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).send(post);
});

module.exports = router;