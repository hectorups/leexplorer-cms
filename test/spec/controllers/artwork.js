'use strict';

describe('Controller: ArtworkCtrl', function () {

  // load the controller's module
  beforeEach(module('leexplorerFrontendApp'));

  var ArtworkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtworkCtrl = $controller('ArtworkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
