angular.module('myApp')
      .service('homeService',function($http){

this.login = function(){
  return $http.get('/auth');
}
})
