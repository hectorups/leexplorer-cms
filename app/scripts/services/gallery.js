'use strict';

/**
 * @ngdoc service
 * @name leexplorerFrontendApp.Gallery
 * @description
 * # Gallery
 * Factory in the leexplorerFrontendApp.
 */
angular.module('leexplorerFrontendApp')
  .factory('Gallery', function ($resource) {
    return $resource('http://localhost:1337/gallery/:id');
  });
