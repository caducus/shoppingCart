// =====================
// Dependencies
// =====================

const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// =========================
// Configurations
// =========================

const port = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose.");
});

// ==========================
// Fix Deprecation Warnings
// ==========================

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// ==========================
// Middleware
// ==========================

app.use(express.static("public"));

// ==========================
// Listener
// ==========================

app.listen(port, () => {
  console.log("I'm totes listening' on port: " + port);
});
