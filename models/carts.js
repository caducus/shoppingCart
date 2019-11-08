// ==========================
// Dependencies
// ==========================

const mongoose = require("mongoose");

// ==========================
// Schema
// ==========================

const cartSchema = new mongoose.Schema ({
  userId: {type: String, unique: true},
  cart: Array,
});

const Cart = mongoose.model("Cart", cartSchema);

// ==========================
// Export
// ==========================

module.exports = Cart;
