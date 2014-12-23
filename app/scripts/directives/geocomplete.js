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
      scope: {
        'callback': '&geoResult'
      },
      link: function (scope, element, attrs) {
        $(element).geocomplete().bind("geocode:result", function (event, result) {
          if(result.geometry && result.geometry.location) {
              var location = result.geometry.location;
              scope.callback({
                lat: location.lat(), 
                lng: location.lng(), 
                address: result.formatted_address
              });
          }
        });
      }
    };
  });
