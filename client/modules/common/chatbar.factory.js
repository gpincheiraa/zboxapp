(function() {
  
  'use strict';
  
  angular
    .module('app.common')
    .factory('ChatbarFactory', factory);
  
  factory.$inject = ['Ref','$firebaseArray'];
  
  /* @ngInject */
  function factory(Ref, $firebaseArray) {
    
    var service = {
      allMsgs: all
    };
    return service;
    
    ////////////////
    function all() {
      return $firebaseArray(Ref);
    }
  }

})();