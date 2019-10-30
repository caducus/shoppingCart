// ==========================
// Dependencies
// ==========================

const mongoose = require("mongoose");

// ==========================
// Schema
// ==========================

const itemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  cost: {type: Number, required: true},
  image: String,
  description: String,
  inStock: Boolean
});

const Item = mongoose.model("Item", itemSchema);

// ==========================
// Export
// ==========================

module.exports = Item;
