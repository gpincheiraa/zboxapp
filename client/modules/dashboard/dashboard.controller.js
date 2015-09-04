(function() {
  
  'use strict';
  
  angular
    .module('app.dashboard')
    .controller('DashboardController', Controller);

  Controller.$inject = ['UserService']
    
  /* @ngInject */
  function Controller(UserService,twitterReader) {
    
    var vm = this;
    vm.title = 'Dashboard con Materialize CSS';
    vm.tweets = UserService.getUser().homeTweets;


  };

})();