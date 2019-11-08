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
  Cart.find({userId: req.body.userId}, (error, foundCart) => {
    if (foundCart.length) {
      console.log('Cart Found');
    } else {
      Cart.create(req.body, (error, createdCart) => {
        res.json(createdCart)
      })
    }
  });
});


// ==========================
// Export
// ==========================

module.exports = router;
