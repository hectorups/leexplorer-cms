'use strict';

describe('Service: Artwork', function () {

  // load the service's module
  beforeEach(module('leexplorerFrontendApp'));

  // instantiate service
  var Artwork;
  beforeEach(inject(function (_Artwork_) {
    Artwork = _Artwork_;
  }));

  it('should do something', function () {
    expect(!!Artwork).toBe(true);
  });

});
