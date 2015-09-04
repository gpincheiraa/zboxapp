(function() {
  
  'use strict';
  
  angular
    .module('app.login')
    .config(Config);

  Config.$inject = ['$stateProvider'] ;

  function Config($stateProvider){

    $stateProvider
      .state('app.login',{
        url: '/login',
        views: {
          'module' : {
            templateUrl: 'modules/login/login.html',
            controller:  'LoginController',
            controllerAs: 'login'
          }
        }
      });

  };
  
  
})();