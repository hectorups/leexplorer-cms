'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('GalleryCtrl', ['$scope', '$routeParams', '$location', 'Gallery', function ($scope, $routeParams, $location, Gallery) {
    $scope.gallery = Gallery.get({id: $routeParams.id});
    $scope.isEditing = false

    $scope.edit = function() {
  		$scope.isEditing = true;
  	};

  	$scope.cancelEdit = function() {
  		$scope.isEditing = false;
  	};

    $scope.submit = function() {
      delete $scope.gallery.artworks;
      $scope.gallery.$save(function() {
        $scope.isEditing = false;
      });
    };

    $scope.delete = function() {
      $scope.gallery.$delete(function() {
        $location.path( "/home" );
      });
    }

}]);
