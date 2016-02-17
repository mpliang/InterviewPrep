'use strict';

app.service('userService', function($http) {

  this.register = function(user) {
    return $http({
      method: 'POST',
      url: '/users/register',
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
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
        email: user.email,
        password: user.password,
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
