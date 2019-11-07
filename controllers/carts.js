// ==========================
// Dependencies
// ==========================

const express = require("express");
const router = express.Router();
const Cart = require("../models/carts.js");

// ==========================
// Post Route
// ==========================

router.post("/", (req, res) => {
  Cart.create(req.body, (error, createdCart) => {
    res.json(createdCart);
  });
});


// ==========================
// Export
// ==========================

module.exports = router;
