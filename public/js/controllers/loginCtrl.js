angular.module('myApp')
      .controller('loginCtrl',function($scope,loginServ){


$scope.login = function(){
  loginServ.login();
}

})
