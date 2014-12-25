'use strict';

/**
 * @ngdoc directive
 * @name leexplorerFrontendApp.directive:leLanguageSelector
 * @description
 * # leLanguageSelector
 */
angular.module('leexplorerFrontendApp')
  .directive('leLanguageSelector', ['$translate', 'SessionService', function ($translate, SessionService) {
    return {
      templateUrl: 'views/leLanguageSelector.html',
      restrict: 'E',
      controller: function($scope, $translate) {
        $scope.current_locale = SessionService.locale;

        $scope.languages = {
          en: 'English',
          es: 'Español'
        };

        $scope.language_list = _.values($scope.languages);

        $scope.changeLanguage = function(language) {
          var locale = _.findKey($scope.languages, function(lan) {
            if(language == lan) {
              return language;
            }
          });

          if(!locale) {
            return;
          }

          $scope.current_locale = locale;
          SessionService.setLocale(locale)
          $translate.use(locale);
        }

      }
    };
  }]);
