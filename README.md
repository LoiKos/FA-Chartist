# FA-Chartist

Angular Directive to integrate [Chartist](https://gionkunz.github.io/chartist-js/index.html)

## Try it 

Example Site : http://loiclp.github.io/FA-Chartist/

##	Install

	```
	bower install fa-chartist
	```

## Options 

This directive is only a wrapper to allow to access basic functionnality of Chartist.js

```
scope: {
  		data : '=faData', // Chartist data 
  		options : '=faOptions', // Chartist Options 
  		type :'@faType', // string 
  		responsiveOptions:'=faResponsiveOptions', // Chartist Responsive Options
      	tooltips:'=faTooltips', // Boolean true if you want tooltips 
      	funct:'=faFunct', // Function (param : chart) ( ex of use : SVG animation, Change forme of point in triangle ,... )
	},
    restrict: 'A', // Access by attributs
    link: link
  };

```

## Example 

	-> Controlleur.js 
		```
		$scope.data = {
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

		```
	-> Html file

		```
		<div fa-chartist fa-data='data' fa-options='option' fa-type="Line"></div>

		```
## Issues

if you have issues during your experience please let me know i'll take a look. 
And please feel free to share any ideas or suggestions to improve this directive.
