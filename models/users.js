// ==========================
// Dependencies
// ==========================

const mongoose = require("mongoose");

// ==========================
// Schema
// ==========================

const userSchema = new mongoose.Schema ({
  username: {type: String, unique: true, require: true},
  password: {type: String, require: true},
  isAdmin: {type: Boolean, default: false}
});

const User = mongoose.model("User", userSchema);

// ==========================
// Export
// ==========================

module.exports = User;