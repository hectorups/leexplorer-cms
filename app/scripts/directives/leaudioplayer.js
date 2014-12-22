'use strict';

/**
 * @ngdoc directive
 * @name leexplorerFrontendApp.directive:leAudioPlayer
 * @description
 * # leAudioPlayer
 */
angular.module('leexplorerFrontendApp')
  .directive('leAudioPlayer', ['ngAudio', function (ngAudio) {
    return {
      templateUrl: 'views/leAudioPlayer.html',
      restrict: 'E',
      scope: {
        artwork: '='
      },
      link: function(scope, element, attrs) {
        scope.player = null;
        scope.$watch('artwork', function(newVal, oldVal) {
          if(newVal  && !scope.player) {
            scope.player = ngAudio.load($.cloudinary.url_internal(newVal.public_id, {resource_type: 'raw'})); 
          } else {
            scope.player = null;
          }
        }, true);

        scope.$on("$destroy", function() {
          if(scope.player && !scope.player.paused) {
            scope.player.stop();
          }
        });
      }
    };
  }]);
