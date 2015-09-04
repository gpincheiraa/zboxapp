(function() {
  
  'use strict';
  
  angular
    .module('app.common')
    .factory('ChatbarFactory', factory);
  
  factory.$inject = ['ChatRef','$firebaseArray'];
  
  /* @ngInject */
  function factory(ChatRef, $firebaseArray) {
    
    var service = {
      allMsgs: all
    };
    return service;
    
    ////////////////
    function all() {
      return $firebaseArray(ChatRef);
    };

  }

})();