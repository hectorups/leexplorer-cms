'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:ArtworkCtrl
 * @description
 * # ArtworkCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('ArtworkCtrl', [ '$scope', '$routeParams', 'Artwork', function ($scope, $routeParams, Artwork) {
    $scope.artwork = Artwork.get({id: $routeParams.id});
    

  }]);
