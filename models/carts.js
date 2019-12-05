// this cart function was created using Academind's shopping cart tutorial, found here: https://www.youtube.com/watch?v=-3vvxn78MH4

module.exports = function Cart() {
  this.items = 0;
  this.totalQty = 0;
  this.totalPrice = 0;

  this.add = function(item, id) {
    let storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = {item: item, qty: 0, price: 0};
    };
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
  };

  this.generateArray = function() {
    let array = [];
    for (let id in this.items) {
      array.push(this.items[id]);
    };
    return array;
  };
};
