angular.module('myApp',['ui.router'])
      .config(function($stateProvider,$urlRouterProvider){

        $stateProvider

        .state('home',{
          url: '/',
          templateUrl: './../views/homeView.html',
          controller: 'homeCtrl'
        })

        .state('longboards',{
          url: '/longboards',
          templateUrl: './../views/longboardView.html',
          controller: 'longboardCtrl'
        })

        $urlRouterProvider

        .otherwise('/');
})
