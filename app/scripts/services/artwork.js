'use strict';

/**
 * @ngdoc service
 * @name leexplorerFrontendApp.Artwork
 * @description
 * # Artwork
 * Factory in the leexplorerFrontendApp.
 */
angular.module('leexplorerFrontendApp')
  .factory('Artwork', function ($resource) {
    return $resource('http://localhost:1337/artwork/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }});
  });
