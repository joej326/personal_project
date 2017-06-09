angular.module('myApp')
      .service('loginServ',function($http){


this.login = function(){
  return $http.get('/auth');
}
this.login();
})
