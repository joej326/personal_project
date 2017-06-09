angular.module('myApp')
      .controller('homeCtrl',function($scope,homeService){


$scope.login = function(){
  homeService.login();
}

})
