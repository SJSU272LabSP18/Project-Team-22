angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

      .state('sportsHub', {
    url: '/page1',
    templateUrl: 'templates/sportsHub.html',
    controller: 'sportsHubCtrl'
  })

  .state('home', {
    url: '/page2',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});