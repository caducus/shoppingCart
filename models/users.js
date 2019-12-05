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
  cart: Array,
  isAdmin: Boolean,
  billingAddress: {
    firstName: String,
    lastName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipCode: String},
  shippingAddress: {
    firstName: String,
    lastName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipCode: String}
});

const User = mongoose.model("User", userSchema);

// ==========================
// Export
// ==========================

module.exports = User;
