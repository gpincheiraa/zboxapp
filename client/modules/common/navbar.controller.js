(function() {
  'use strict';
  
  angular
    .module('app.common')
    .controller('NavbarController', Controller);
  
  Controller.$inject = ['UserService','$state'];
  
  /* @ngInject */
  function Controller(UserService,$state) {
    
    var vm = this;
    vm.title = 'Controller';
    vm.isModuleActive = function(_state){

      return $state.is(_state);
    };
  };


})();