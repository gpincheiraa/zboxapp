(function() {
  
  'use strict';
  
  angular
    .module('app.dashboard')
    .config(Config);

  Config.$inject = ['$stateProvider','NavbarViewConf','ChatbarViewConf'] ;

  function Config($stateProvider,NavbarViewConf,ChatbarViewConf){

    $stateProvider
      .state('app.dashboard',{
        url: '/dashboard',
        views: {
          
          'navbar': NavbarViewConf ,

          'module' : {
            templateUrl : 'modules/dashboard/dashboard.html',
            controller  : 'DashboardController',
            controllerAs: 'dashboard'
          },

          'chat': ChatbarViewConf 

        }
      });

  };
  
  
})();