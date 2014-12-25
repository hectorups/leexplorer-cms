'use strict';

describe('Directive: leLanguageSelector', function () {

  // load the directive's module
  beforeEach(module('leexplorerFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<le-language-selector></le-language-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the leLanguageSelector directive');
  }));
});
