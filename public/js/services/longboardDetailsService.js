angular.module('myApp')
      .service('longboardDetailsServ',function($http){


this.getSingleBoard = function(id){
  return $http.get('/api/longboards/' + id);
}

this.addToCart = function(product){
  return $http({
    method: 'POST',
    url: '/api/cart',
    data: {product: product}
  })
}
// cruising	freeride	downhill	push	sliding


})
