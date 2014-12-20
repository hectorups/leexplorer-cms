'use strict';

/**
 * @ngdoc directive
 * @name leexplorerFrontendApp.directive:geocomplete
 * @description
 * # geocomplete
 */
angular.module('leexplorerFrontendApp')
  .directive("geocomplete", function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $(element).geocomplete().bind("geocode:result", function (event, result) {
          if(result.geometry && result.geometry.location) {
              var location = result.geometry.location;

              scope.$apply(function(scope) {
                scope.updateGeo(location.lat(), location.lng(), result.formatted_address);
              });
          }
        });
      }
    };
  });
