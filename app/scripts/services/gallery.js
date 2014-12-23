'use strict';

/**
 * @ngdoc service
 * @name leexplorerFrontendApp.Gallery
 * @description
 * # Gallery
 * Factory in the leexplorerFrontendApp.
 */
angular.module('leexplorerFrontendApp')
  .factory('Gallery', [ '$resource', 'ENV', function ($resource, ENV) {
    return $resource(ENV.apiEndpoint + '/gallery/:id/:association', { id: '@id' }, {
      artworks: {
        isArray : true,
        params: {
          association: "artworks"
        }
      }
    });
  }]);
