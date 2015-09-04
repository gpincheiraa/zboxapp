(function() {
  'use strict';
  
  angular
    .module('app.common')
    .controller('ChatbarController', Controller);
  
  Controller.$inject = ['ChatbarFactory'];
  
  /* @ngInject */
  function Controller(ChatbarFactory) {
    
    var vm = this;
    
    vm.title = 'La Barra de Chat';
    vm.messages = ChatbarFactory.allMsgs();


  }
})();