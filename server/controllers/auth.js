const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

//Register user
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({ ...req.body, password: hashedPassword });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
