'use strict';

describe('Directive: geocomplete', function () {

  // load the directive's module
  beforeEach(module('leexplorerFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<geocomplete></geocomplete>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the geocomplete directive');
  }));
});
