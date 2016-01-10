var app = angular.module('interview', ['ui.router']);
// window.url = 'https://alumni-network.herokuapp.com/';
window.url = 'http://localhost:3000/';

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('/', { url: '/', templateUrl: './views/home.ejs', controller: 'mainCtrl' })
}]);
