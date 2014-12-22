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

    // @todo: all this bellow needs to be dried up into custom directives. Today, I am just happy if 
    // I wire up everything correctly.

    $scope.onImageSelect = function($files) {
      var file = $files[0];
      $scope.image_upload = $upload.upload({
        url: "https://api.cloudinary.com/v1_1/" + $.cloudinary.config().cloud_name + "/upload",
        data: {upload_preset: $.cloudinary.config().upload_preset, tags: $scope.editingArtwork.gallery_id},
        withCredentials: false,
        file: file
      }).progress(function (e) {
        $scope.image_progress = Math.round((e.loaded * 100.0) / e.total);
        $scope.image_status = "Uploading... " + $scope.image_progress + "%";
      }).success(function (data, status, headers, config) {
        console.log(data);
        $scope.editingArtwork.image = data;
      });
    };

    $scope.audio = null;
    $scope.$watch('artwork', function(newVal, oldVal) {
      if(newVal && newVal.audio) {
        $scope.audio = ngAudio.load($.cloudinary.url_internal(newVal.audio.public_id, {resource_type: 'raw'})); 
      } else {
        $scope.audio = null;
      }
    }, true);

    $scope.onAudioSelect = function($files) {
      var file = $files[0];
      $scope.audio_upload = $upload.upload({
        url: "https://api.cloudinary.com/v1_1/" + $.cloudinary.config().cloud_name + "/upload",
        data: {upload_preset: $.cloudinary.config().upload_preset, tags: $scope.editingArtwork.gallery_id},
        withCredentials: false,
        file: file
      }).progress(function (e) {
        $scope.audio_progress = Math.round((e.loaded * 100.0) / e.total);
        $scope.audio_status = "Uploading... " + $scope.audio_progress + "%";
      }).success(function (data, status, headers, config) {
        console.log(data);
        angular.extend(data, {locale: 'en'});
        $scope.editingArtwork.audio = data;
        $scope.audio_progress = 0;
        $scope.$apply();
      });
    };

    $scope.editingAudio = null;
    $scope.$watch('editingArtwork', function(newVal, oldVal) {
      if(newVal && newVal.audio) {
        $scope.editingAudio = ngAudio.load($.cloudinary.url_internal(newVal.audio.public_id, {resource_type: 'raw'})); 
      } else {
        $scope.editingAudio = null;
      }
    }, true);

}])
