(function() {
  
  'use strict';
  
  angular
    .module('app.common')
    .service('UserService', Service);
  
  Service.$inject = ['$rootScope'];
  /* @ngInject */
  function Service($rootScope) {
    
    var isLogged = false,
        userData = {};

    this.setUser = setUser;
    this.getUser = getUser;

    this.setHomeTweets = setHomeTweets;

    function setUser(_user){
      isLogged = true;
      userData.profile = _user;
    };

    function getUser(){
      return userData;
    };

    function setHomeTweets(tweets){
      userData.homeTweets = tweets;
    };

  }

})();