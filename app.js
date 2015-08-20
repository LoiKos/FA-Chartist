'use strict';

var myApp = angular.module('myApp',['faChartist','ui.bootstrap']);

myApp.controller('appController', ['$scope','$rootScope', function($scope,$rootScope) {
  	

  // Web Site controls


   $scope.lceCollapsed = false;
   $scope.bceCollapsed = false;
   $scope.pceCollapsed = false;
   $scope.pueCollapsed = false;

}]);