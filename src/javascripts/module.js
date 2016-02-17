var app = angular.module('interview', ['ui.router']);
// window.url = 'https://alumni-network.herokuapp.com/';
window.url = 'http://localhost:3000/';

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('/', { url: '/', templateUrl: './templates/home.html', controller: 'mainCtrl' })
  .state('login', { url: '/login', templateUrl: './templates/login.html', controller: 'loginCtrl' })
  .state('home', { url: '/index', templateUrl: './templates/home.html', controller: 'homeCtrl' })
  .state('questions', { url: '/questions', templateUrl: './templates/questions.html', controller: 'homeCtrl' })
  .state('challenges', { url: '/challenges', templateUrl: './templates/challenges.html', controller: 'homeCtrl' })
  .state('resources', { url: '/resources', templateUrl: './templates/resources.html' })
  .state('newPost', { url: '/newpost', templateUrl: './templates/newPost.html' })
  .state('test', { url: '/test', templateUrl: './templates/parallax.html' })
}]);
