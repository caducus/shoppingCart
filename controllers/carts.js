// ==========================
// Dependencies
// ==========================

const express = require("express");
const router = express.Router();

const Cart = require("../models/carts.js");
const Product = require("../models/items.js");

// ==========================
// Get Routes
// ==========================

router.get("/add-to-cart/:id", (req, res) => {
  let productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, (error, product) => {
    if (error) {
      return res.redirect("/");
    };
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect("/");
  });
});

// ==========================
// Export
// ==========================

module.exports = router;
