'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:LoginctrlCtrl
 * @description
 * # LoginctrlCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('loginCtrl', ['$scope', 'AuthService',
	function($scope, AuthService) {
		$scope.login = AuthService.login;
	}
]);
