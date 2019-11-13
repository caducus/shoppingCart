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
      console.log("Cart found.");
      req.params.currentCart = foundCart;
    } else {
      Cart.create(req.body, (error, createdCart) => {
        console.log("Cart created.");
        res.json(createdCart);
        req.params.currentCart = createdCart;
      })
    }
  });
});

// ==========================
// Put Routes
// ==========================

router.put("/", (req, res) => {
  Cart.findByIdAndUpdate(req.params.currentCart, req.body, {new:true}, (error, updatedCart) => {
    res.json(updatedCart);
  });
});

// ==========================
// Export
// ==========================

module.exports = router;
