const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authController = require("./controllers/auth");
const userController = require("./controllers/users");
const postController = require("./controllers/post");
const categoryController = require("./controllers/category");
dotenv.config();
const app = express();

app.use(express.json());
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
