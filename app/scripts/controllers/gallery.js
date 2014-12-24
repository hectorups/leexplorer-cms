'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('GalleryCtrl', ['$scope', '$routeParams', '$location', 'Gallery', '$modal', 
  function ($scope, $routeParams, $location, Gallery, $modal) {
    $scope.gallery = Gallery.get({id: $routeParams.id});
    $scope.artworks = Gallery.artworks({id: $routeParams.id});
    $scope.editingGallery = {};
    $scope.isEditing = false;
    $scope.alerts = [];

    $scope.types = [
      'general', 'painting', 'sculpture', 'modern', 'classic'
    ];
    $scope.price_references = _.range(0, 60);

    $scope.facilities = ['wifi', 'accessibility', 'cafe'];
    $scope.facility_translation_prefix = 'GALLERY.';

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
      $scope.gallery.$delete(function() {
        $location.path( "/home" );
      });
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.confirmDelete = function() {
      var modalInstance = $modal.open({
        templateUrl: 'views/confirmmodal.html',
        controller: 'ConfirmmodalCtrl',
        size: 'sm',
        resolve: {
          name: function () {
            return $scope.gallery.name;
          }
        }
      });

      modalInstance.result.then(function (confirmed) {
        if(confirmed) {
          $scope.delete();
        }
      });
    };

    $scope.geoResult = function(lat, lng, address) {
      $scope.editingGallery.latitude = lat;
      $scope.editingGallery.longitude = lng;
      $scope.editingGallery.address = address;
    };

}])
