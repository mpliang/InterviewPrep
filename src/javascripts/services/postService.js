'use strict';

app.service('postService', function ($http) {

  this.getAll = () => $http.get('allPosts');

});
