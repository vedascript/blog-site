const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Post = require("../models/post");

//create post
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update post
router.patch("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(400).json({ msg: "You can only update your post" });
    }
  } catch (err) {
    re.status(404).json({ msg: "User not found" });
  }
});

//Get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...data } = user._doc;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
