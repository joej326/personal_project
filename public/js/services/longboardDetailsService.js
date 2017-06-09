angular.module('myApp')
      .service('longboardDetailsServ',function($http){


this.getSingleBoard = function(id){
  return $http.get('/api/longboards/' + id);
}

// cruising	freeride	downhill	push	sliding


})
