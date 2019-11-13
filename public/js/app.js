const app = angular.module('shoppingCart', []);

app.controller("MainController", ["$http", function($http) {
  const controller = this;
  this.showNewForm = false;
  this.showLogInForm = false;
  this.indexOfEditForm;

  //  cart functions
  this.currentCart = function () {
    $http({
      method: "GET",
      url: "/currentCart"
    }).then(function(response) {
      console.log("I have saved the cart informaiton.");
      console.log(response.data);
      controller.currentCart = response.data._id;
    });
  };

  this.createCart = function (user) {
    $http({
      method: "POST",
      url: "/carts",
      data: {
              userId: user,
              cart: null
      }
    }).then(function(response) {
      console.log(response.data);
      controller.currentCart();
    }, function(error) {
      console.log(error);
    });
  };

  this.addToCart = function (item) {
    $http({
      method: "PUT",
      url: "/carts",
      data: {
        cart: item
      }
    }).then(function(response) {
      console.log(response.data);
    }, function(error) {
      console.log(error);
    });
  };

  // user functions
  this.createUser = function () {
    $http({
      method: "POST",
      url: "/users",
      data: {
              username: this.createdUsername,
              password: this.createdPassword,
              isAdmin: false
      }
    }).then(function(response) {
      console.log(response.data);
      controller.createdUsername = null;
      controller.createdPassword = null;
      controller.showNewForm = false;
    }, function(error) {
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
    }).then(function(response) {
      console.log(response.data);
      controller.isLoggedIn();
      controller.username = null;
      controller.password = null;
      controller.showLogInForm = false;
    }, function(error) {
      console.log(error);
    });
  };

  this.logOut = function () {
    $http({
      method: "DELETE",
      url: "/sessions"
    }).then(function(response) {
      console.log(response.data);
      controller.loggedInUser = null;
      controller.userIsAdmin = null;
      controller.currentCart = null;
    }, function(error) {
      console.log(error);
    });
  };

  this.isLoggedIn = function () {
    $http({
      method: "GET",
      url: "/loggedin"
    }).then(function(response) {
      console.log("I am a user, hear me roar!");
      controller.loggedInUser = response.data.username;
      controller.userIsAdmin = response.data.isAdmin;
      controller.createCart(response.data._id)
    }, function(error) {
      console.log(error);
    });
  };

  // item functions
  this.getItems = function () {
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
        stockQuantity: this.stockQuantity
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
        stockQuantity: this.updatedStock
      }
    }).then(function(response) {
      console.log(response.data);
      controller.indexOfEditForm = !controller.indexOfEditForm
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
