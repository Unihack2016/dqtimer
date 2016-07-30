'use strict';

/**
 * @ngdoc overview
 * @name dqtimerApp
 * @description
 * # dqtimerApp
 *
 * Main module of the application.
 */
angular
  .module('dqtimerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/request_item/:id', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/interest', {
        templateUrl: 'views/interest.html',
        controller: 'InterestCtrl',
        controllerAs: 'interest'
      })
      .otherwise({
        redirectTo: '/request_item/:id'
      });
  });
