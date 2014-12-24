'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('GalleryCtrl', ['$scope', '$routeParams', '$location', 'Gallery', '$modal', '$translate', 
  function ($scope, $routeParams, $location, Gallery, $modal, $translate) {
    $scope.gallery = Gallery.get({id: $routeParams.id});
    $scope.artworks = Gallery.artworks({id: $routeParams.id});
    $scope.editingGallery = {};
    $scope.isEditing = false;
    $scope.alerts = [];

    $scope.types = {
      general: 'general', painting: 'painting', sculpture: 'sculpture', modern: 'modern', classic: 'classic'
    };

    $scope.facilitiesSettings = {'showCheckAll': false, 'showUncheckAll': false};
    $scope.selectedFacilities = [];
    $translate(['GALLERY.WIFI', 'GALLERY.ACCESSIBILITY', 'GALLERY.CAFE']).then(function(translations){
      $scope.facilities = [ 
        {id: "wifi", label: translations['GALLERY.WIFI']},
        {id: "accessibility", label: translations['GALLERY.ACCESSIBILITY']},
        {id: "cafe", label: translations['GALLERY.CAFE']}
      ];
    });
    $scope.$watch('gallery.facilities', function(newVal, oldVal) {
      if(newVal) {
        $scope.selectedFacilities = [];
        _.each(newVal,function(facility){
          $scope.selectedFacilities.push({id: facility});
        });  
      }
    });

    $scope.facilitiesEvents = {
      onItemSelect: function(item) {
        if(item) {
          $scope.editingGallery.facilities.push(item.id);
        }
    }, onItemDeselect: function(item) {
        if(item) {
          var pos = $scope.gallery.facilities.indexOf(item.id);
          $scope.editingGallery.facilities.splice(pos, 1);
        }
    }};
    

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
