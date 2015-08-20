'use strict';
myApp.controller('PieController', ['$scope','$rootScope', function($scope,$rootScope) {

	/* Pie Examples */


// Simple Pie Chart //

$scope.spcdata = {
  series: [5, 3, 4]
};

$scope.spcoption ={
  labelInterpolationFnc: function(value) {
    var sum = function(a,b){return a + b };
    return Math.round(value / $scope.spcdata.series.reduce(sum) * 100) + '%';
  }
};


// Pie Chart With Custom Labels //

$scope.pcwcldata = {
  labels: ['Bananas', 'Apples', 'Grapes'],
  series: [20, 15, 40]
};

 $scope.pcwcloption = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

$scope.pcwclresponsiveoption = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

// Gauge Chart //

$scope.gcdata ={
  series: [20, 10, 30, 40]
};

$scope.gcoption = {
  donut: true,
  donutWidth: 60,
  startAngle: 270,
  total: 200,
  showLabel: false
};


// Animating a Donut With Svg.Animate //

$scope.adwsadata = {
  series: [10, 20, 50, 20, 5, 50, 15],
  labels: [1, 2, 3, 4, 5, 6, 7]
};

$scope.adwsaoption = {
  donut: true,
  showLabel: false
};

$scope.adwsafunct = function(chart){

  chart.on('draw', function(data) {
	  if(data.type === 'slice'){
	    // Get the total path length in order to use for dash array animation
	    var pathLength = data.element._node.getTotalLength();

	    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
	    data.element.attr({
	      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
	    });

	    // Create animation definition while also assigning an ID to the animation for later sync usage
	    var animationDefinition = {
	      'stroke-dashoffset': {
	        id: 'anim' + data.index,
	        dur: 1000,
	        from: -pathLength + 'px',
	        to:  '0px',
	        easing: Chartist.Svg.Easing.easeOutQuint,
	        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
	        fill: 'freeze'
	      }
	    };

	    // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
	    if(data.index !== 0) {
	      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
	    }

	    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
	    data.element.attr({
	      'stroke-dashoffset': -pathLength + 'px'
	    });

	    // We can't use guided mode as the animations need to rely on setting begin manually
	    // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
	    data.element.animate(animationDefinition, false);
	  }
});

// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart.on('created', function(){
	if(window.__anim21278907124) {
	    clearTimeout(window.__anim21278907124);
	    window.__anim21278907124 = null;
	}
  window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
});

};


}]); // End of Controller