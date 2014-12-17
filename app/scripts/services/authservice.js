'use strict';

/**
 * @ngdoc service
 * @name leexplorerFrontendApp.AuthService
 * @description
 * # AuthService
 * Factory in the leexplorerFrontendApp.
 */
angular.module('leexplorerFrontendApp')
  .factory('AuthService', ['$http', '$location', 'SessionService', 'API',
    function ($http, $location, SessionService, API) {

      var login = function (username, pw) {
        $http.post(API.backend + '/login', {'username': username, 'password': pw}).
          success(function (data, status, headers, config) {
              SessionService.setLogged(true),
              SessionService.setUserId(data.id),
              $location.url('/home');
            }
          ).
          error(function(data, status, headers, config){
            SessionService.destroy();
            alert('login failure');
          });
      };

      var logout = function () {
        $http({url: API.backend + '/logout', 
          method: 'DELETE'
        }).
          success(function () {
            SessionService.destroy();
            $location.url('/login');
          });
      };

      return {
        login: login,
        logout: logout
      }
  }]);
