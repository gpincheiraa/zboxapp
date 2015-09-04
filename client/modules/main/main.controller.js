(function() {
  
  'use strict';
  
  angular
    .module('app.main')
    .controller('MainController', Controller);
  
  Controller.$inject = ['$state','UserService'];
  
  /* @ngInject */
  function Controller($state,UserService) {
    
    var vm = this;
    vm.title = 'En esta pantalla voy a comprobar el estado del usuario';

  }
})();