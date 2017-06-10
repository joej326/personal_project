angular.module('myApp')
      .service('cartServ',function($http){

this.removeBoard = function(product){
  return $http({
    method: 'DELETE',
    url: '/api/cart',
    data: {product: product}
  })
}
})
