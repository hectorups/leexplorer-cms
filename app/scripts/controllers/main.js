'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('MainCtrl', ['$scope', 'Gallery',
  	function ($scope, Gallery) {
  		$scope.galleries = Gallery.query();

  		$scope.viewGallery = function (id) {
			 $location.url('/gallery/' + id )
		  };
  	}
  ]);
