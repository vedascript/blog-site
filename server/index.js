const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userController = require("./controllers/auth");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/user", userController);

mongoose
  .connect(process.env.ATLAS_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => app.listen(5000, console.log("SERVER RUNNING")))
  .catch((error) => console.log(error));
