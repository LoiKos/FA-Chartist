'use strict';
myApp.controller('PluginController', ['$scope','$rootScope', function($scope,$rootScope) {

// Plugin Example 

	$scope.thresholddata ={
	  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	  series: [
	    [5, -4, 3, 7, 20, 10, 3, 4, 8, -10, 6, -8]
	  ]
	};

	$scope.thresholdoption = {
	  showArea: true,
	  axisY: {
	    onlyInteger: true
	  },
	  plugins: [
	    Chartist.plugins.ctThreshold({
	      threshold: 4
	    })
	  ]
	};

}]);