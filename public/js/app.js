const app = angular.module('shoppingCart', []);

app.controller("MainController", ["$scope", "$http", function($scope, $http) {
  const controller = this;
  this.showNewForm = false;
  this.showLogInForm = false;
  this.indexOfEditForm;
  $scope.numberOfItems = 0;
  $scope.currentCart = [];

  // partial navigation
  this.includePath = "partials/shop.html"
  this.shopView = true;

  this.changeInclude = (path) => {
    this.includePath = "partials/" + path + ".html"
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

  // cart functions
  $scope.addToCart = function (item) {
    // if the cart does not yet exist,
    if ($scope.currentCart.length === 0) {
      // add +1 to this item count
      item.count = 1;
      // push this item to the cart
      $scope.currentCart.push(item);
    // otherwise, if the cart already exists
    } else {
      // set duplicateItem to false
      let duplicateItem = false;
      // loop through the array of items in the cart to see if this item id matches any of the cart item ids
      for (let i = 0; i < $scope.currentCart.length; i++) {
        // if there is a match, set duplicateItem to true
        if ($scope.currentCart[i]._id === item._id) {
          duplicateItem = true;
          // add +1 to the duplicate item count
          $scope.currentCart[i].count += 1;
        };
      };
      // if this item is not a duplicate
      if (!duplicateItem) {
        // add +1 to this item count
        item.count = 1;
        // push this item to the cart
        $scope.currentCart.push(item);
      };
    };
    // add +1 to the total number of items in the cart
    $scope.numberOfItems += 1;
    console.log($scope.currentCart);
  };

  this.getItems();

}]);
