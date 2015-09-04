(function() {
  'use strict';
  
  angular
    .module('app.common')
    .directive('gpChatWindow', directive);
  
  
  /* @ngInject */
  function directive(){
    // Usage:
    //  <gp-chat-window messages="array"></gp-chat-window>
    // Creates:
    //
    var directive = {
        bindToController: true,
        controller: Controller,
        controllerAs: 'vm',
        link: link,
        restrict: 'E',
        templateUrl: 'modules/common/gp-chat-window.html',
        scope: {
          messages: '='
        }
    };
    return directive;
    
    function link(scope, element, attrs){
        


    }
  };

  Controller.$inject = ['ChatRef','UserService'];

  /* @ngInject */
  function Controller(ChatRef,UserService){
    
    var vm = this,
        userLogged = UserService.getUser();
    
    vm.send = function(msg){

      ChatRef.push({
        message: msg,
        user:  {
          id: userLogged.profile.id,
          name: userLogged.profile.name
        }
      });

      vm.message = '';

    };

  };
})();