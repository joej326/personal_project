angular.module('myApp')
      .controller('longboardCtrl', function($scope,longboardServ){


$scope.getLongboards =
  longboardServ.getLongboards().then(function(response){

    $scope.longboards = response.data;
  });

$scope.filterByColor = function(color){
  longboardServ.filterByColor(color).then(function(response){
    $scope.longboards = response.data;
  });
}

$scope.priceOrder = function(value){
  if(value === 'high'){
    $scope.order = "-price";
  }else if(value ==='low'){
    $scope.order = 'price'
  }
}

})
