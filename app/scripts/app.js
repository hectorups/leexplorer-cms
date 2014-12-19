'use strict';

/**
 * @ngdoc overview
 * @name leexplorerFrontendApp
 * @description
 * # leexplorerFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('leexplorerFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'leexplorerConstants'
  ])
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });

    // Cookies for CORS
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push(['$rootScope', '$q', '$location', 'SessionService', function($rootScope, $q, $location, SessionService) {
      return {
        responseError: function(rejection) {
          if (rejection.status === 401) {
            SessionService.destroy();
            $location.url('/login');
          }
          return $q.reject(rejection);
        }
      };
    }]);

  }])
  .run(function ($rootScope, $location, SessionService, AuthService) {
    $rootScope.$on("$locationChangeStart", function (event, next) {
      if (!SessionService.isLogged()) {
        $location.url('/login');
      } else if(_.last(next.split('/')) == 'login') {
        $location.url('/home');
      }
    });

    /* TODO: apparently the location declaration on the rootscope is needed so that the nav on the 
            index.html knows it's defined (since it has no controller). How can I organize app so that
            nav can exist with it's own controller while coexisting with the ng-view? */
    $rootScope.$location = $location;
    $rootScope.AuthService = AuthService;
    $rootScope.SessionService = SessionService;
  });
