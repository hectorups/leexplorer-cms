'use strict';

/**
 * @ngdoc directive
 * @name leexplorerFrontendApp.directive:leUploader
 * @description
 * # leUploader
 */
angular.module('leexplorerFrontendApp')
  .directive('leUploader', ['$upload', function ($upload) {
    return {
      templateUrl: 'views/leUploader.html',
      restrict: 'E',
      scope: {
        callback: '&uploadCompleted',
        tags: '='
      },
      link: function (scope, element, attrs) {
        
        scope.onFileSelect = function($files) {
          var file = $files[0];
          scope.upload = $upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + $.cloudinary.config().cloud_name + "/upload",
            data: {upload_preset: $.cloudinary.config().upload_preset, tags: scope.tags},
            withCredentials: false,
            file: file
          }).progress(function (e) {
            scope.progress = Math.round((e.loaded * 100.0) / e.total);
            scope.status = "Uploading... " + scope.progress + "%";
          }).success(function (data, status, headers, config) {
            scope.progress = 0;
            scope.callback({data: data});
          });
        };
      }
    };
  }]);
