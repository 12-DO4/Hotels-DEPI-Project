const express = require('express');
const { Post } = require('../../models/post');
const router = express.Router();

/**************************************************************************************************/
/*
  this API for connecting the client project so it will return json 
  not like the courses at this path:  \routes\courses.js  it returns html (ejs)

*/
// Get all courses (API route for client-side JSON requests)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch courses from MongoDB
    res.status(200).json(posts);  // Send JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});
/**************************************************************************************************/
// Get course by ID (API route for fetching a single course by its ID)
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); // Fetch course by ID from MongoDB
    if (!post) {
      return res.status(404).json({ error: 'Post not found' }); // Handle course not found
    }
    res.status(200).json(post);  // Send JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
});
module.exports = router;
