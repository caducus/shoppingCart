const Item = require("../models/items.js");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shoppingCart")

var items = [
  new Item({
  name: 'Cat Teeth',
  cost: 249,
  image: 'images/funny_cat1.jpeg',
  description: 'Give your toothless cat some pearly whites',
  stockQuantity: 5
  }),
  new Item({
  name: 'Cat Balls',
  cost: 249,
  image: 'images/ball_toy.jpeg',
  description: 'Make your cats chase these balls',
  stockQuantity: 5
  }),
  new Item({
  name: 'Cat Mousie',
  cost: 249,
  image: 'images/mouse_toy.jpeg',
  description: 'Good practice for hunting these pests',
  stockQuantity: 5
  }),
  new Item({
  name: 'Cat Scrunche',
  cost: 249,
  image: 'images/scrunchie_toy.jpeg',
  description: 'Noisy but cats love them',
  stockQuantity: 5
  }),
  new Item({
  name: 'Cat Tunnel',
  cost: 249,
  image: 'images/tunnel.jpeg',
  description: 'A tunnel for your cats',
  stockQuantity: 5
  }),
  new Item({
  name: 'Cat Wands',
  cost: 249,
  image: 'images/wands.jpeg',
  description: 'Harry Potter Wands for your cats',
  stockQuantity: 5
  }),
  new Item({
  name: "catnip-filled mouse",
  cost: 5,
  image: 'images/catnip-filled-mouse.jpg',
  description: "a cute little mouse your cats will go crazy over",
  stockQuantity: 5
  }),
  new Item({
  name: "cat tower",
  cost: 199,
  image: 'images/cat-tower.jpeg',
  description: "amazing amusement part themed cat tower for your crazy little daredevils",
  stockQuantity: 5
  }),
  new Item({
  name: "feather on a stick",
  cost: 8,
  image: 'images/feather-on-stick.jpg',
  description: "a timeless classic",
  stockQuantity: 5
  }),
  new Item({
  name: "self-scratching post",
  cost: 20,
  image: 'images/self-pet-station.jpeg',
  description: "a clever little toy that lets your cat reach those hard to scratch places",
  stockQuantity: 5
  })
];

let done = 0;
for (let i = 0; i < items.length; i++) {
  items[i].save(function(error, results) {
    done++;
    if (done === items.length) {
      exit();
    };
  });
};
function exit() {
  mongoose.disconnect();
}
