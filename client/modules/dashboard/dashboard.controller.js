(function() {
  
  'use strict';
  
  angular
    .module('app.dashboard')
    .controller('DashboardController', Controller);

  Controller.$inject = ['UserService']
    
  /* @ngInject */
  function Controller(UserService) {
    
    var vm = this;
    vm.title = 'Dashboard con Materialize CSS';
    vm.tweets = UserService.getUser().homeTweets;


  };

})();