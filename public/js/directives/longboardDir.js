angular.module('myApp')
      .directive('longboardDir',function(){

    return {
      link: function(scope,elem,attr){
        $(elem).on('mouseenter',function(){
          $(elem).animate({bottom: '225px'});
        });
        $(elem).on('mouseleave',function(){
          $(elem).animate({bottom: '0px'});
        })
      }
    }
})
