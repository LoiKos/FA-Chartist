'use strict';

var myApp = angular.module('myApp',['faChartist','ui.bootstrap']);

myApp.controller('appController', ['$scope','$rootScope', function($scope,$rootScope) {
  	

  // Web Site controls


   $scope.lceCollapsed = true;
   $scope.bceCollapsed = true;
   $scope.pceCollapsed = true;
   $scope.pueCollapsed = true;

  

}]);