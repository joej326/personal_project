angular.module('myApp')
      .controller('longboardDetailsCtrl', function($scope,longboardDetailsServ,cartServ,$stateParams){

$scope.longboardId = $stateParams.id;

$scope.getSingleBoard =
  longboardDetailsServ.getSingleBoard($scope.longboardId).then(function(response){

    $scope.singleBoard = response.data[0];

// cruising	freeride	downhill	push	sliding

    if($scope.singleBoard.cruising === 3){

    }
  })

  $scope.addToCart =function(product){
  
    longboardDetailsServ.addToCart(product).then(function(response){
      $scope.cart = response.data;
      // console.log($scope.cart);
    })
  }






})
