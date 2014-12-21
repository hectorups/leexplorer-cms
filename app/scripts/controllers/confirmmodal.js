'use strict';

/**
 * @ngdoc function
 * @name leexplorerFrontendApp.controller:ConfirmmodalCtrl
 * @description
 * # ConfirmmodalCtrl
 * Controller of the leexplorerFrontendApp
 */
angular.module('leexplorerFrontendApp')
  .controller('ConfirmmodalCtrl', [ '$scope', '$modalInstance', 'name', function ($scope, $modalInstance, name) {
  $scope.name = name;

  $scope.ok = function () {
    $modalInstance.close(true);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);
