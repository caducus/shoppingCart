const app = angular.module('shoppingCart', []);

app.controller("MainController", ["$http", function($http) {
  const controller = this;

  this.getItems = function() {
    $http({
      method: "GET",
      url: "/items"
    }).then(function(response) {
      controller.items = response.data;
    }, function(error) {
      console.log(error);
    });
  };

  this.addItem = function () {
    $http({
      method: "POST",
      url: "/items",
      data: {
        name: this.name,
        description: this.description,
        cost: this.cost,
        image: this.image,
        inStock: this.inStock
      }
    }).then(function(response) {
      console.log(response.data);
    }, function(error) {
      console.log(error);
    });
  };

  this.editItem = function (item) {
    $http({
      method: "PUT",
      url: "/items/" + item._id,
      data: {
        name: this.updatedName,
        description: this.updatedDescription,
        cost: this.updatedCost,
        image: this.updatedImage,
        inStock: this.updatedStock
      }
    }).then(function(response) {
      console.log(response.data);
    }, function(error) {
      console.log(error);
    });
  };

  this.deleteItem = function (item) {
    $http({
      method: "DELETE",
      url: "/items/" + item._id
    }).then(function(response) {
       controller.getItems();
    }, function(error) {
      console.log(error);
    });
  };

}]);
