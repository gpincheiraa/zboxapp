(function() {
  'use strict';
  
  angular
    .module('app.login')
    .controller('LoginController', Controller);
  
  Controller.$inject = ['UserService','$state'];
  
  /* @ngInject */
  function Controller(UserService,$state) {
    
    var vm = this;
    
    vm.connect = connectFn;
    vm.title = "title";

    function connectFn(){

      $state.go('app.dashboard');

    };
    
  }

})();