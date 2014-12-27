'use strict';

/**
 * @ngdoc filter
 * @name leexplorerFrontendApp.filter:nl2br
 * @function
 * @description
 * # nl2br
 * Filter in the leexplorerFrontendApp.
 */
angular.module('leexplorerFrontendApp')
	.filter("nl2br",['$filter', function($filter) {
		return function(data) {
		if (!data) return data;
	   		return data.replace(/\n\r?/g, '<br />');
		};
	}]);
