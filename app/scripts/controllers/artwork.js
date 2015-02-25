'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:ArtworkCtrl
 * @description
 * # ArtworkCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('ArtworkCtrl', ['$scope', '$window', '$routeParams', '$location', 'Artwork', '$modal', '$upload', 'ngAudio', 
  function ($scope, $window, $routeParams, $location, Artwork, $modal, $upload, ngAudio) {
    $scope.artwork = null;
    $scope.artworkId = $routeParams.id;
    $scope.galleryId = $routeParams.gallery_id;

    function loadArtwork() {
      if($scope.artworkId) {
        Artwork.get({id: $routeParams.id}, function(artwork) {
          $scope.artwork = artwork;
        });
      } else {
        $scope.editingArtwork = new Artwork();
        $scope.editingArtwork.gallery = $scope.galleryId;
        $scope.editingArtwork.likes_count = 0;
      }
      
    }
    loadArtwork();

    $scope.likes_count_reference = [0, 50, 100, 150, 200]
    $scope.isEditing = !$scope.artworkId;
    $scope.alerts = [];

    $scope.edit = function() {
      $scope.editingArtwork = angular.copy($scope.artwork);
      $scope.isEditing = true;
    };

    $scope.cancelEdit = function() {
      if($scope.artworkId) {
        $scope.isEditing = false;  
      } else {
        $window.history.back();
      }
    };

    $scope.submit = function() {
      if(!_.isString($scope.editingArtwork.gallery)) {
        delete $scope.editingArtwork.gallery;
      }
      $scope.editingArtwork.$save(function() {
        $scope.artwork = $scope.editingArtwork;
        $scope.isEditing = false;
        $scope.alerts.push({type: 'success', msg: 'Artwork Saved!'});
      });
    };

    $scope.delete = function() {
      $scope.artwork.$delete(function() {
        $location.path( "/gallery/" + $scope.artwork.gallery_id );
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
            return $scope.artwork.name;
          }
        }
      });

      modalInstance.result.then(function (confirmed) {
        if(confirmed) {
          $scope.delete();
        }
      });
    };

    $scope.imageUploaded = function(data) {
      console.log(data);
      $scope.editingArtwork.image = data;
    };

    $scope.audioUploaded = function(data) {
      console.log(data);
      angular.extend(data, {locale: 'en'});
      $scope.editingArtwork.audio = data;
    };

}])
