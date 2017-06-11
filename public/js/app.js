angular.module('myApp',['ui.router'])
      .config(function($stateProvider,$urlRouterProvider,$httpProvider){

        $httpProvider.defaults.headers.delete = { "Content-Type": "application/json;charset=utf-8" };

        $stateProvider

        .state('home',{
          url: '/',
          templateUrl: './../views/homeView.html',
          controller: 'homeCtrl'
        })

        .state('longboards',{
          url: '/api/longboards',
          templateUrl: './../views/longboardView.html',
          controller: 'longboardCtrl'
        })

        .state('longboardDetails',{
          url:'/api/longboards/:id',
          templateUrl: './../views/longboardDetails.html',
          controller: 'longboardDetailsCtrl'
        })

        .state('cart',{
          url:'/api/cart',
          templateUrl: './../views/cartView.html',
          controller: 'cartCtrl'
        })

        .state('login',{
          url:'/auth',
          templateUrl: './../views/loginView.html',
          controller: 'loginCtrl'
        })

        $urlRouterProvider

        .otherwise('/');
})
