const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

mongoose
  .connect(process.env.ATLAS_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(5000, console.log("SERVER RUNNING")))
  .catch((error) => console.log(error));
