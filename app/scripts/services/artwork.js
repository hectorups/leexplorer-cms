'use strict';

/**
 * @ngdoc service
 * @name leexplorerFrontendApp.Artwork
 * @description
 * # Artwork
 * Factory in the leexplorerFrontendApp.
 */
angular.module('leexplorerFrontendApp')
  .factory('Artwork', [ '$resource', 'ENV', function ($resource, ENV) {
    return $resource( ENV.apiEndpoint + '/artwork/:id', { id: '@id' }, {});
  }]);
