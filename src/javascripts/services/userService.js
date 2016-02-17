'use strict';

app.service('userService', function($http) {

  this.register = function(username, password) {
    return $http({
      method: 'POST',
      url: '/users/register',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        username: username,
        password: password,
      }
    })
    .then(function(resp) {
      console.log(resp);
      localStorage.setItem("token", resp.data);
    }, function(err) {
      console.error(err.data);
    })
  }

  this.login = function(username, password) {
    return $http({
      method: 'POST',
      url: '/users/login',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        username: username,
        password: password,
      }
    })
    .then(function(resp) {
      console.log(resp);
      localStorage.setItem("token", resp.data);
    }, function(err) {
      console.error(err.data);
    })
  }
});
