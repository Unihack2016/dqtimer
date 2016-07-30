'use strict';

/**
 * @ngdoc function
 * @name dqtimerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dqtimerApp
 */
angular.module('dqtimerApp')
  .controller('MainCtrl', ["$scope", "$routeParams", "$firebaseObject", "$timeout", function ($scope, $routeParams, $firebaseObject, $timeout) {
      var ref  =  firebase.database().ref();

      $scope.request = $firebaseObject(ref.child('queueitems').child($routeParams.id));
  }]);
