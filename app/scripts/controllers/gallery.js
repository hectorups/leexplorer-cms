'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('GalleryCtrl', ['$scope', '$routeParams', 'Gallery', function ($scope, $routeParams, Gallery) {
    $scope.gallery = Gallery.get({id: $routeParams.id});
    $scope.isEditing = false

    $scope.editVenue = function () {
		$scope.isEditing = true;
	};

	$scope.cancelEdit = function () {
		$scope.isEditing = false;
	};

 }]);
