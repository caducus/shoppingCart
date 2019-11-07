// =====================
// Dependencies
// =====================

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session")

require("dotenv").config();

// Controllers
const itemsController = require("./controllers/items.js");
const sessionsController = require("./controllers/sessions.js");
const usersController = require("./controllers/users.js");
const cartsController = require("./controllers/carts.js");

const app = express();
const db = mongoose.connection;

// =========================
// Configurations
// =========================

const port = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose.");
});

// error and success messages
db.on("error", (error) => console.log(error.message + ' is Mongod not running?'));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));

// ==========================
// Fix Deprecation Warnings
// ==========================

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// ==========================
// Middleware
// ==========================

app.use(express.static("public"));
app.use(express.json());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

// paths for controllers
app.use("/items", itemsController);
app.use("/sessions", sessionsController);
app.use("/users", usersController);
app.use("/carts", cartsController);

// ==========================
// Routes
// ==========================

app.get("/loggedin", (req, res) => {
  if (req.session.currentUser) {
    res.json(req.session.currentUser);
  } else {
    res.status(401).json ({
      status: 401,
      message: "not logged in"
    });
  };
});

// ==========================
// Listener
// ==========================

app.listen(port, () => {
  console.log("I'm totes listening' on port: " + port);
});
