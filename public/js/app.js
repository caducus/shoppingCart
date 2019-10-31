const app = angular.module('shoppingCart', []);

app.controller("MainController", ["$http", function($http) {

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

    }, function(error) {
      console.log(error);
    });
  };
  
}]);
