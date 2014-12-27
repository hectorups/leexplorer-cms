'use strict';

/**
 * @ngdoc directive
 * @name leexplorerFrontendApp.directive:leUploader
 * @description
 * # leUploader
 */
angular.module('leexplorerFrontendApp')
  .directive('leUploader', ['$upload', '$translate', function ($upload, $translate) {
    return {
      templateUrl: 'views/leuploader.html',
      restrict: 'E',
      scope: {
        callback: '&uploadCompleted',
        tags: '=',
        prompt: '@'
      },
      controller: function($scope, $translate) {
        
        $scope.onFileSelect = function($files) {
          var file = $files[0];
          $scope.upload = $upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + $.cloudinary.config().cloud_name + "/upload",
            data: {upload_preset: $.cloudinary.config().upload_preset, tags: $scope.tags},
            withCredentials: false,
            file: file
          }).progress(function (e) {
            $scope.progress = Math.round((e.loaded * 100.0) / e.total);
            $translate('UPLOADER.STATUS', {percentage: $scope.progress}).then( function(translation) {
              $scope.status = translation;
            });
          }).success(function (data, status, headers, config) {
            $scope.progress = 0;
            $scope.callback({data: data});
          });
        };
      }
    };
  }]);
