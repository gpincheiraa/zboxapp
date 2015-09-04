(function(){

  'use strict';

  //Módulos de la aplicación
  angular.module('app.common',[]);
  angular.module('app.login',[]);
  angular.module('app.dashboard',[]);
  angular.module('app.main',[]);

  /**********************************************/
  /**         GLOBAL CONSTANTS                 **/
  /**********************************************/

  //Constante usada para cargar la configuración del Navbar común a todos los módulos
  angular
    .module('app.common')
    .constant('NavbarViewConf',{
      templateUrl: 'modules/common/navbar.html',
      controller: 'NavbarController',
      controllerAs: 'navbar'
    });

  //Constante usada para cargar la configuración de la barra de chat común a todos los módulos 
  angular
    .module('app.common')
    .constant('ChatbarViewConf',{
      templateUrl: 'modules/common/chatbar.html',
      controller: 'ChatbarController',
      controllerAs: 'chatbar'
    });

  //Constante con la url de la API Firebase del muro/chat 
  angular
    .module('app.common')
    .constant('F_CHAT_URL', 'http://zenboxapp.firebaseio.com/messages');

  //Servicio
  angular
    .module('app.common')
    .service('Ref',['F_CHAT_URL',Firebase]);


  angular
    .module('app.common')
    .constant('ipc',require('ipc'));


  //Módulo principal y función de Configuración
  angular
    .module('zboxApp',['ui.router',
                       'firebase',
                       'ngMaterial',
                       'ngMdIcons',

                       'app.common',
                       'app.dashboard',
                       'app.login',
                       'app.main'])
    .config(Config)
    .run(Run);

    //Configuración del módulo global
    Config.$inject = ['$stateProvider','$urlRouterProvider','$mdThemingProvider'] ;
    
    function Config($stateProvider,$urlRouterProvider,$mdThemingProvider){

      $mdThemingProvider.theme('default').dark();

      $urlRouterProvider.otherwise("/app");

      $stateProvider
        .state('app',{
          url: '/app',
          views: {
            'main' : {
              templateUrl: 'modules/main/main.html',
              controller: 'MainController',
              controllerAs: 'main'
            }
          }
        });
    };

    //Configuración del procedimiento del módulo global
    Run.$inject = ['UserService','ipc','$state'] ;

    function Run(UserService,ipc,$state){

      ipc.on('hometweets',function(tweets){

        UserService.setHomeTweets(tweets);

        $state.go('app.dashboard');

      });

      ipc.on("userdata",function(userdata){
        UserService.setUser(userdata);
      });



    };

    
})();
