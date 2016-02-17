'use strict';

//index, navbar controller
app.controller('loginCtrl', function($scope, $state, userService) {
  if (localStorage.getItem("token")) {
    $state.go('home');
  } else {
    $state.go('login');
  }

  $scope.register = function(user) {
    console.log(user);
    userService.register(user)
    .then(function() {
      console.log('registered');
      $state.go('find');
    })
  }

  $scope.login = function() {
    userService.login($scope.loginUsername, $scope.loginPassword)
    .then(function() {
      console.log('logged in');
      $state.go('find');
    })
  }
});
