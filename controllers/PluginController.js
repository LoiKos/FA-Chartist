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

	$scope.accessibilitydata={
	  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	  series: [
	    {name: 'Income', data: [20000, 30000, 35000, 32000, 40000, 42000, 50000, 62000, 80000, 94000, 100000, 120000]},
	    {name: 'Expenses', data: [10000, 15000, 12000, 14000, 20000, 23000, 22000, 24000, 21000, 18000, 30000, 32000]}
	  ]
	};

	$scope.accessibilityoption={
		  fullWidth: true,
		  lineSmooth: false,
		  chartPadding: {
		    right: 20,
		    left: 10
		  },
		  axisX: {
		    labelInterpolationFnc: function(value) {
		      return value.split('').slice(0, 3).join('');
		    }
		  },
		  plugins: [
		    Chartist.plugins.ctAccessibility({
		      caption: 'Fiscal year 2015',
		      seriesHeader: 'business numbers',
		      summary: 'A graphic that shows the business numbers of the fiscal year 2015',
		      valueTransform: function(value) {
		        return value + ' dollar';
		      },
		      // ONLY USE THIS IF YOU WANT TO MAKE YOUR ACCESSIBILITY TABLE ALSO VISIBLE!
		      visuallyHiddenStyles: 'position: absolute; top: 100%; width: 100%; font-size: 11px; overflow-x: auto;   background-color :rgba(240, 91, 79, 0.1); padding: 10px'
		    })
		  ]
		};


	$scope.pointlabeldata={
  labels: ['M', 'T', 'W', 'T', 'F'],
  series: [
    [12, 9, 7, 8, 5]
  ]
};

	$scope.pointlabeloption={
  plugins: [
    Chartist.plugins.ctPointLabels({
      textAnchor: 'middle'
    })
  ]
};


$scope.sketchydata={
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  series: [
    [800000, 1200000, 1400000, 1300000],
    [200000, 400000, 500000, 300000],
    [100000, 200000, 400000, 600000]
  ]
};

$scope.sketchyoption={
  plugins: [
    Chartist.plugins.ctSketchy({
      overrides: {
        grid: {
          baseFrequency: 0.2,
          scale: 5,
          numOctaves: 1
        },
        bar: {
          baseFrequency: 0.02,
          scale: 10
        },
        label: false
      }
    })
  ],
  stackBars: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value / 1000) + 'k';
    }
  }
};

$scope.sketchyfunc= function(chart){
	chart.on('draw', function(data) {
	  if(data.type === 'bar') {
	    data.element.attr({
	      style: 'stroke-width: 30px'
	    });
	  }
	});
}

$scope.axistitledata = {
  labels: ['0-15', '16-30', '31-45', '46-60', '61-75', '76-90', '91-105', '106-120'],
  series: [[1, 3, 7, 12, 1, 2, 1, 0]]
}

$scope.axistitleoption ={
  chartPadding: {
    top: 20,
    right: 0,
    bottom: 30,
    left: 0
  },
  axisY: {
    onlyInteger: true
  },
  plugins: [
    Chartist.plugins.ctAxisTitle({
      axisX: {
        axisTitle: 'Time (mins)',
        axisClass: 'ct-axis-title',
        offset: {
          x: 0,
          y: 50
        },
        textAnchor: 'middle'
      },
      axisY: {
        axisTitle: 'Goals',
        axisClass: 'ct-axis-title',
        offset: {
          x: 0,
          y: 0
        },
        textAnchor: 'middle',
        flipTitle: false
      }
    })
  ]
};

}]);