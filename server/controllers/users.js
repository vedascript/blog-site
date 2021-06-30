const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Post = require("../models/post");

//update user
router.patch("/update/:id", async (req, res) => {
  if (req.body.userId !== req.params.id)
    return res.status(401).json({ msg: "You can only update your account" });

  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete user
router.delete("/delete/:id", async (req, res) => {
  if (req.body.userId !== req.params.id)
    return res.status(401).json({ msg: "You can only delete your account" });
  try {
    const user = await User.findById(req.params.id);
    try {
      await Post.deleteMany({ username: user.username });
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: "User deleted" });
    } catch (err) {
      res.status(500).json(err);
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
