describe("LoginCtrl", function() {

  var scope;
  var ctrl;
   
  beforeEach(module('leexplorerFrontendApp'));
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('loginCtrl', {$scope: scope});
  }));

  it('should have the login Service in the scope', function() {
    expect(scope.login).to.be.an('function');
  });

});