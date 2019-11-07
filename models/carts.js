// ==========================
// Dependencies
// ==========================

const mongoose = require("mongoose");

// ==========================
// Schema
// ==========================

const cartSchema = new mongoose.Schema ({
  userId: String,
  cart: Array,
});

const Cart = mongoose.model("Cart", cartSchema);

// ==========================
// Export
// ==========================

module.exports = Cart;
