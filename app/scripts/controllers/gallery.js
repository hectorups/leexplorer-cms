'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('GalleryCtrl', ['$scope', '$routeParams', '$location', 'Gallery', '$modal', function ($scope, $routeParams, $location, Gallery, $modal) {
    $scope.gallery = Gallery.get({id: $routeParams.id});
    $scope.artworks = Gallery.artworks({id: $routeParams.id});
    $scope.editingGallery = {};
    $scope.isEditing = false;
    $scope.alerts = [];

    $scope.edit = function() {
      $scope.editingGallery = angular.copy($scope.gallery);
  		$scope.isEditing = true;
  	};

  	$scope.cancelEdit = function() {
  		$scope.isEditing = false;
  	};

    $scope.submit = function() {
      delete $scope.editingGallery.artworks;
      $scope.editingGallery.$save(function() {
        $scope.gallery = $scope.editingGallery;
        $scope.isEditing = false;
        $scope.alerts.push({type: 'success', msg: 'Gallery Saved!'});
      });
    };

    $scope.delete = function() {
      return;
      // $scope.gallery.$delete(function() {
      //   $location.path( "/home" );
      // });
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.confirmDelete = function() {
      var modalInstance = $modal.open({
        templateUrl: 'confirmDeleteModalContent.html',
        controller: 'ConfirmDeleteModalCtrl',
        size: 'sm',
        resolve: {
          gallery: function () {
            return $scope.gallery;
          }
        }
      });

      modalInstance.result.then(function (confirmed) {
        if(confirmed) {
          $scope.delete();
        }
      });
    };

}]).controller('ConfirmDeleteModalCtrl', [ '$scope', '$modalInstance', 'gallery', function ($scope, $modalInstance, gallery) {
  $scope.gallery = gallery;

  $scope.ok = function () {
    $modalInstance.close(true);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);
