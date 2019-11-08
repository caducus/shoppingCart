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
<<<<<<< HEAD
  isAdmin: Boolean
=======
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
>>>>>>> 4b16dc2a851017bed3d1c745ca526798fc8cacd1
});

const User = mongoose.model("User", userSchema);

// ==========================
// Export
// ==========================

module.exports = User;
