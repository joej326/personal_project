angular.module('myApp')
      .controller('cartCtrl',function($scope,cartServ,longboardDetailsServ){

        $scope.addToCart =function(){

          longboardDetailsServ.addToCart().then(function(response){
            console.log(response)
            $scope.cart = response.data[0];
            $scope.total = response.data[1];
            console.log(`total: ${$scope.total}`);
          })
        }
        $scope.addToCart();

        $scope.removeBoard = function(product){
          cartServ.removeBoard(product);
        }


})
