// Import required modules
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

// Create the app
const app = express();

// Set up middleware
app.use(express.json());

// Set up the database connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected..."))
  .catch(err => console.log(err));
