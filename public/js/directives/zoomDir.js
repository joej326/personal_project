angular.module('myApp')
      .directive('zoomDir',function(){

    return {
      restrict: 'A',
      controller: 'longboardDetailsCtrl',
      link: function(scope,elem,attrs){

        scope.$watch('singleBoard', function(){

          fetchBiggerBoard();
        })
        function fetchBiggerBoard(){

          $(elem).zoom({url: scope.singleBoard.imagexl});
          // console.log(scope.singleBoard);

      }


//         elem.attr('data-zoom-image',attrs.zoomImage);
//         $(elem).elevateZoom({
//           zoomType				: "inner",
//           cursor: "crosshair"
// });
      }
    }
})
