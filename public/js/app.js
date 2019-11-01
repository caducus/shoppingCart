const app = angular.module('shoppingCart', []);

app.controller("MainController", ["$http", function($http) {
  const controller = this;

  this.createUser = function () {
    $http({
      method: "POST",
      url: "/users",
      data: {
              username: this.createdUsername,
              password: this.createdPassword,
              isAdmin: false
      }
    }).then(function (response) {
      console.log(response.data);
      this.createdUsername = null;
      this.createdPassword = null;
    }, function (error) {
      console.log(error);
    });
  };

  this.logIn = function () {
    $http({
      method: "POST",
      url: "/sessions",
      data: {
              username: this.username,
              password: this.password
      }
    }).then(function (response) {
      console.log(response.data);
      this.username = null;
      this.password = null;
    }, function (error) {
      console.log(error);
    });
  };

  this.getItems = function () {
    $http({
      method: "GET",
      url: "/items"
    }).then(function (response) {
      controller.items = response.data;
    }, function (error) {
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
      controller.getItems();
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

  this.getItems();

}]);
