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
      isLogged: function() {
        return $cookies.isLogged == '1';
      },

      setLogged: function(value) {
        $cookies.isLogged = value ? '1' : '';
      },

      user_id: $cookies.user_id,
      setUserId: function(user_id) {
        this.user_id = $cookies.user_id = user_id;
      },

      locale: $cookies.locale || 'en',
      setLocale: function(value) {
        this.locale = $cookies.locale = value;
      },

      destroy: function() {
        this.setUserId(null)
        this.setLogged(false);
      }
    };
  }]);
