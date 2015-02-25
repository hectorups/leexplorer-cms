'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('GalleryCtrl', ['$scope', '$window', '$routeParams', '$location', 'Gallery', '$modal', '$translate',
  function ($scope, $window, $routeParams, $location, Gallery, $modal, $translate) {
    $scope.galleryId = $routeParams.id;
    $scope.gallery = null; 
    $scope.artworks = []; 
    $scope.editingGallery = null;
    $scope.isEditing = !$scope.galleryId;
    $scope.alerts = [];
    $scope.artworksTabSelected = _.last($location.path().split("/")) == "artworks";

    function loadGalleryInfo() {
      if($scope.galleryId) {
        Gallery.get({id: $routeParams.id}, function(gallery) {
          $scope.gallery = gallery;
        });
        $scope.artworks = Gallery.artworks({id: $scope.galleryId});  
      } else {
        $scope.editingGallery = new Gallery();
        $scope.editingGallery.price_reference = 0;
        $scope.editingGallery.type = 'general';
      }
      
    }
    loadGalleryInfo();

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
      if($scope.galleryId) {
        $scope.isEditing = false;  
      } else {
        $window.history.back();
      }
  	};

    $scope.submit = function() {
      delete $scope.editingGallery.artworks;
      delete $scope.editingGallery.images;
      $scope.editingGallery.$save(function() {
        $scope.gallery = $scope.editingGallery;
        $scope.isEditing = false;
        $translate('GALLERY.SAVED').then( function(translation) {
          $scope.alerts.push({type: 'success', msg: translation});
        });
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
