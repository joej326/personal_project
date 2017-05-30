angular.module('myApp')
      .controller('longboardCtrl', function($scope,longboardServ){

$scope.test = longboardServ.test;
})
