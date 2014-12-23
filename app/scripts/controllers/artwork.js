'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:ArtworkCtrl
 * @description
 * # ArtworkCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('ArtworkCtrl', ['$scope', '$routeParams', '$location', 'Artwork', '$modal', '$upload', 'ngAudio', 
  function ($scope, $routeParams, $location, Artwork, $modal, $upload, ngAudio) {
    $scope.artwork = null;
    Artwork.get({id: $routeParams.id}, function(artwork) {
      $scope.artwork = artwork;
    });

    $scope.editingArtwork = {};
    $scope.isEditing = false;
    $scope.alerts = [];

    $scope.edit = function() {
      $scope.editingArtwork = angular.copy($scope.artwork);
      $scope.isEditing = true;
    };

    $scope.cancelEdit = function() {
      $scope.isEditing = false;
    };

    $scope.submit = function() {
      delete $scope.editingArtwork.gallery;
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
