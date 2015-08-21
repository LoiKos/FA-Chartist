angular.module('faChartist',[])
.directive('faChartist', function() {

  return {
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


function link(scope,element,attrs) {

 element.addClass('ct-chart ct-golden-section');

 var chart = new Chartist[scope.type](element[0], 
    scope.data,
    scope.options,
    scope.responsiveOptions
    )

   if(scope.funct != null){
      scope.funct(chart);
  }

  if(scope.tooltips==true)
  {
   chart.on('created', function(data) {

      var $chart = angular.element(data.svg._node.parentNode);
      $chart.append('<div class="tooltip ng-hide"></div>');
      var $toolTip =angular.element(document.querySelectorAll('.tooltip'));
      var points = data.svg._node.querySelectorAll('.ct-point');

      for(var i=0;i<points.length;i++){

         points[i].addEventListener("mouseenter", function( event ) {
            var $point = angular.element(event.srcElement);
            var value = $point.attr('ct:value');
            seriesName = $point.parent().attr('ct:series-name');
            $toolTip.html(seriesName + '<br>' + value);
            $toolTip.removeClass('ng-hide');
        });

         points[i].addEventListener("mouseleave",function(event){
           $toolTip.addClass('ng-hide');
       });

         points[i].addEventListener("mousemove",function(event){
            $toolTip.css({
              left: ((event.offsetX || event.originalEvent.layerX) - $toolTip[0].offsetWidth / 2 )+'px' ,
              top: ((event.offsetY || event.originalEvent.layerY) - $toolTip[0].offsetHeight - 20)+'px' 
          });0
        });
     }
    }); // End of Chart.on    
  }


  // Catch "update" events to update chart. To use if you want to hide/show your charts 
  $rootScope = angular.element(document).scope();
  $rootScope.$on("fa-Chartist:update",function(event,message){
                setTimeout(function(){ 
                    if(element[0].offsetWidth != 0){
                      chart.update(); 
                    }             
                 }, 1);
              });


} // End of Link

}); // End of Directive