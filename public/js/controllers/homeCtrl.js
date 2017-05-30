angular.module('myApp')
      .controller('homeCtrl',function($scope,homeService){

$scope.test = homeService.test;


})
