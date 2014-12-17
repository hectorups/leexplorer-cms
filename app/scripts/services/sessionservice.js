'use strict';

/**
 * @ngdoc service
 * @name leexplorerFrontendApp.SessionService
 * @description
 * # SessionService
 * Factory in the leexplorerFrontendApp.
 */
angular.module('leexplorerFrontendApp')
  .factory('SessionService', ['$cookies', function ($cookies) {
    return {
      isLogged: function(){
        return $cookies.isLogged == '1';
      },
      setLogged: function(value){
        $cookies.isLogged = value ? '1' : '';
      },
      name: $cookies.name,
      user_id: $cookies.user_id,
      setUserId: function(user_id){
        this.user_id = $cookies.user_id = user_id;
      },
      destroy: function () {
        this.name = '';
        this.user_id = '';
        this.setLogged(false);
      }
    };
  }]);
