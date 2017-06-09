angular.module('myApp')
      .service('longboardServ', function($http){


this.getLongboards = function(){
  return $http.get('/api/longboards');
}

this.filterByColor = function(color){
  return $http.get('/api/longboards?color=' + color);
}
})
