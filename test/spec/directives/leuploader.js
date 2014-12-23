'use strict';

describe('Directive: leUploader', function () {

  // load the directive's module
  beforeEach(module('leexplorerFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<le-uploader></le-uploader>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the leUploader directive');
  }));
});
