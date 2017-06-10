angular.module('myApp')
      .directive('cartDir',function(){

    return {
      restrict: 'EA',
      controller: 'longboardDetailsCtrl',
      link: function(scope,elem,attr){
        console.log(scope.cart);
    }
}})
