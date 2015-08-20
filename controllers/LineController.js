'use strict';
myApp.controller('LineController', ['$scope','$rootScope', function($scope,$rootScope) {

/*Line Examples*/


// Simple Line Chart //

$scope.slcdata = 
	{
		  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		  series: [
		    [12, 9, 7, 8, 5],
		    [2, 1, 3.5, 7, 3],
		    [1, 3, 4, 5, 6]
		  ]
	};

$scope.slcoption = {
	  	fullWidth: true,
	  	chartPadding: {
	    right: 40
		}
	};	


// Holes in Data //


$scope.hiddata = {
	  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
	  series: [
	    [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
	    [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
	    [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null]
	  ]
	};

$scope.hidoption = {
		  fullWidth: true,
		  chartPadding: {
		    right: 10
		  },
		  low: 0
	};

// Only whole Numbers //

$scope.owndata = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [1, 2, 3, 1, -2, 0, 1, 0],
    [-2, -1, -2, -1, -3, -1, -2, -1],
    [0, 0, 0, 1, 2, 3, 2, 1],
    [3, 2, 1, 0.5, 1, 0, -1, -3]
  ]
}

$scope.ownoption = {
  high: 3,
  low: -3,
  fullWidth: true, 
  // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
  axisY: { 
    onlyInteger: true,
    offset: 20
  	}
}

// Line Scatter Diagram with Responsive Settings //

var times = function(n) {
  return Array.apply(null, new Array(n));
};

$scope.lsdwrsdata= times(52).map(Math.random).reduce(function(data, rnd, index) {
  data.labels.push(index + 1);
  data.series.forEach(function(series) {
    series.push(Math.random() * 100)
  });

  return data;
}, {
  labels: [],
  series: times(4).map(function() { return new Array() })
});

$scope.lsdwrsoption= {
  showLine: false,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 13 === 0 ? 'W' + value : null;
    }
  }
};

$scope.lsdwrsresponsiveoption=[
  ['screen and (min-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 4 === 0 ? 'W' + value : null;
      }
    }
  }]
];

// Line Chart With Tooltips // 

$scope.lcwtdata= {
  labels: ['1', '2', '3', '4', '5', '6'],
  series: [
    {
      name: 'Fibonacci sequence',
      data: [1, 2, 3, 5, 8, 13]
    },
    {
      name: 'Golden section',
      data: [1, 1.618, 2.618, 4.236, 6.854, 11.09]
    }
  ]
};

// Line Chart With Area //

$scope.lcwadata={
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [5, 9, 7, 8, 5, 3, 5, 4]
  ]
};
$scope.lcwaoption={
	fullWidth: true,
  low: 0,
  showArea: true
};

//Bi-Polar Line Chart Withe Area Only //

$scope.blcwaodata={
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [1, 2, 3, 1, -2, 0, 1, 0],
    [-2, -1, -2, -1, -2.5, -1, -2, -1],
    [0, 0, 0, 1, 2, 2.5, 2, 1],
    [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
  ]
};

$scope.blcwaooption={
  high: 3,
  low: -3,
  showArea: true,
  showLine: false,
  showPoint: false,
  fullWidth: true,
  axisX: {
    showLabel: false,
    showGrid: false
  	}
};

// Using Events To Replace Graphics //

$scope.uetrgdata={
  labels: [1, 2, 3, 4, 5],
  series: [
    [12, 9, 7, 8, 5]
  ]
};


$scope.ftriangle = function(chart){
 chart.on('draw', function(data) {
        if(data.type === 'point'){ 
          var triangle =new Chartist.Svg('path', {
       d: ['M',
        data.x,
        data.y - 15,
        'L',
        data.x - 15,
        data.y + 8,
        'L',
        data.x + 15,
        data.y + 8,
        'z'].join(' '),
      style: 'fill-opacity: 1'
    }, 'ct-area');
     data.element.replace(triangle);
          }
        });
}

// Line Interpolation/Smoothing //

$scope.lisdata={
  labels: [1, 2, 3, 4, 5],
  series: [
    [1, 5, 10, 0, 1],
    [10, 15, 0, 1, 2]
  ]
};

$scope.lisoption={
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 2
  }),
  fullWidth: true,
  chartPadding: {
    right: 20
  },
  low: 0
};

// Series Overrides //

$scope.sodata={
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  // Naming the series with the series object array notation
  series: [{
    name: 'series-1',
    data: [5, 2, -4, 2, 0, -2, 5, -3]
  }, {
    name: 'series-2',
    data: [4, 3, 5, 3, 1, 3, 6, 4]
  }, {
    name: 'series-3',
    data: [2, 4, 3, 1, 4, 5, 3, 2]
  }]
};

$scope.sooption={
  fullWidth: true,
  // Within the series options you can use the series names
  // to specify configuration that will only be used for the
  // specific series.
  series: {
    'series-1': {
      lineSmooth: Chartist.Interpolation.step()
    },
    'series-2': {
      lineSmooth: Chartist.Interpolation.simple(),
      showArea: true
    },
    'series-3': {
      showPoint: false
    }
  }
};

$scope.soresponsiveoption=[
  // You can even use responsive configuration overrides to
  // customize your series configuration even further!
  ['screen and (max-width: 320px)', {
    series: {
      'series-1': {
        lineSmooth: Chartist.Interpolation.none()
      },
      'series-2': {
        lineSmooth: Chartist.Interpolation.none(),
        showArea: false
      },
      'series-3': {
        lineSmooth: Chartist.Interpolation.none(),
        showPoint: true
      }
    }
  }]
];

// Advanced Smil Animation

$scope.asadata={
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  series: [
    [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
    [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
    [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
    [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
  ]
};

$scope.asaoption={
  low: 0
};

$scope.smil = function(chart){
	var seq = 0,
	delays = 80,
	durations = 500;

// Once the chart is fully created we reset the sequence
chart.on('created', function() {
	seq = 0;
});

// On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
chart.on('draw', function(data) {
	seq++;

	if(data.type === 'line') {
    // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
    data.element.animate({
    	opacity: {
        // The delay when we like to start the animation
        begin: seq * delays + 1000,
        // Duration of the animation
        dur: durations,
        // The value where the animation should start
        from: 0,
        // The value where it should end
        to: 1
    }
});
} else if(data.type === 'label' && data.axis === 'x') {
	data.element.animate({
		y: {
			begin: seq * delays,
			dur: durations,
			from: data.y + 100,
			to: data.y,
        // We can specify an easing function from Chartist.Svg.Easing
        easing: 'easeOutQuart'
    }
});
} else if(data.type === 'label' && data.axis === 'y') {
	data.element.animate({
		x: {
			begin: seq * delays,
			dur: durations,
			from: data.x - 100,
			to: data.x,
			easing: 'easeOutQuart'
		}
	});
} else if(data.type === 'point') {
	data.element.animate({
		x1: {
			begin: seq * delays,
			dur: durations,
			from: data.x - 10,
			to: data.x,
			easing: 'easeOutQuart'
		},
		x2: {
			begin: seq * delays,
			dur: durations,
			from: data.x - 10,
			to: data.x,
			easing: 'easeOutQuart'
		},
		opacity: {
			begin: seq * delays,
			dur: durations,
			from: 0,
			to: 1,
			easing: 'easeOutQuart'
		}
	});
} else if(data.type === 'grid') {
    // Using data.axis we get x or y which we can use to construct our animation definition objects
    var pos1Animation = {
    	begin: seq * delays,
    	dur: durations,
    	from: data[data.axis.units.pos + '1'] - 30,
    	to: data[data.axis.units.pos + '1'],
    	easing: 'easeOutQuart'
    };

    var pos2Animation = {
    	begin: seq * delays,
    	dur: durations,
    	from: data[data.axis.units.pos + '2'] - 100,
    	to: data[data.axis.units.pos + '2'],
    	easing: 'easeOutQuart'
    };

    var animations = {};
    animations[data.axis.units.pos + '1'] = pos1Animation;
    animations[data.axis.units.pos + '2'] = pos2Animation;
    animations['opacity'] = {
    	begin: seq * delays,
    	dur: durations,
    	from: 0,
    	to: 1,
    	easing: 'easeOutQuart'
    };

    data.element.animate(animations);
}
});

// For the sake of the example we update the chart every time it's created with a delay of 10 seconds
chart.on('created', function() {
	if(window.__exampleAnimateTimeout) {
		clearTimeout(window.__exampleAnimateTimeout);
		window.__exampleAnimateTimeout = null;
	}
	window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
});
}



// Svg Path Animation //

$scope.spadata={
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  series: [
    [1, 5, 2, 5, 4, 3],
    [2, 3, 4, 8, 1, 2],
    [5, 4, 3, 2, 1, 0.5]
  ]
};

$scope.spaoption={
  low: 0,
  showArea: true,
  showPoint: false,
  fullWidth: true
};

$scope.svg = function(chart){
    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          	}
        });
      }
    });
}


// Some SVG Animation Can Only Be Done With SMIL

$scope.ssvgadata = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  series: [
    [12, 4, 2, 8, 5, 4, 6, 2, 3, 3, 4, 6],
    [4, 8, 9, 3, 7, 2, 10, 5, 8, 1, 7, 10]
  ]
};

$scope.ssvgaoption = {
  low: 0,
  showLine: false,
  axisX: {
    showLabel: false,
    offset: 0
  },
  axisY: {
    showLabel: false,
    offset: 0
  }
};


$scope.ssvgafunct = function(chart){
// Let's put a sequence number aside so we can use it in the event callbacks
var seq = 0;

// Once the chart is fully created we reset the sequence
	chart.on('created', function() {
		seq = 0;
	});

// On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
	chart.on('draw', function(data) {
		if(data.type === 'point') {
	    // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
		    data.element.animate({
		    opacity: {
		        // The delay when we like to start the animation
		        begin: seq++ * 80,
		        // Duration of the animation
		        dur: 500,
		        // The value where the animation should start
		        from: 0,
		        // The value where it should end
		        to: 1
		    	},
		    x1: {
		    	begin: seq++ * 80,
		    	dur: 500,
		    	from: data.x - 100,
		    	to: data.x,
		        // You can specify an easing function name or use easing functions from Chartist.Svg.Easing directly
		        easing: Chartist.Svg.Easing.easeOutQuart
		    	}
			});
		}
	});

// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart.on('created', function() {
	if(window.__anim0987432598723) {
		clearTimeout(window.__anim0987432598723);
		window.__anim0987432598723 = null;
	}
	window.__anim0987432598723 = setTimeout(chart.update.bind(chart), 8000);
});


};


}]);