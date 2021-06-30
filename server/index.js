const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const authController = require("./controllers/auth");
const userController = require("./controllers/users");
const postController = require("./controllers/post");
const categoryController = require("./controllers/category");
dotenv.config();
const app = express();
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(201).json({ msg: "File has been uploaded" });
});

app.use("/auth", authController);
app.use("/user", userController);
app.use("/post", postController);
app.use("/cat", categoryController);

mongoose
  .connect(process.env.ATLAS_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => app.listen(5000, console.log("SERVER RUNNING")))
  .catch((error) => console.log(error));
