const Item = require("../models/items.js");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shoppingCart")

var items = [
  new Item({
  imagePath: 'images/funny_cat1.jpeg',
  title: 'Cat Teeth',
  description: 'Give your toothless cat some pearly whites',
  price: 249
  }),
  new Item({
  imagePath: 'images/ball_toy.jpeg',
  title: 'Cat Balls',
  description: 'Make your cats chase these balls',
  price: 249
  }),
  new Item({
  imagePath: 'images/mouse_toy.jpeg',
  title: 'Cat Mousie',
  description: 'Good practice for hunting these pests',
  price: 249
  }),
  new Item({
  imagePath: 'images/scrunchie_toy.jpeg',
  title: 'Cat Scrunche',
  description: 'Noisy but cats love them',
  price: 249
  }),
  new Item({
  imagePath: 'images/tunnel.jpeg',
  title: 'Cat Tunnel',
  description: 'A tunnel for your cats',
  price: 249
  }),
  new Item({
  imagePath: 'images/wands.jpeg',
  title: 'Cat Wands',
  description: 'Harry Potter Wands for your cats',
  price: 249
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
