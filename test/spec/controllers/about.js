describe("AboutCtrl", function() {

  var scope;
  var ctrl;
   
  beforeEach(module('leexplorerFrontendApp'));
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('AboutCtrl', {$scope: scope});
  }));
  afterEach(function() { });

  it('should succeed', function() { 
  	expect(true).to.be.true; 
  });

  it('should have app scope', function() {
    expect(scope.app).to.equal('leexplorer');
  });

});