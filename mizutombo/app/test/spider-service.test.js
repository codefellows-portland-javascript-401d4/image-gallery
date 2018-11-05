describe('spider service', () => {
  const {assert} = chai;

  // need to mock the services module,
  // which is where spider service lives
  beforeEach(
    angular.mock.module('services', {apiUrl: '/api'})
  );

  let $httpBackend = null, spiderService = null;

  beforeEach(angular.mock.inject((_spiderService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    spiderService = _spiderService_;
  }));

  afterEach(() => {
    // make sure the $httpBackend expectations
    // that we set up actually happened
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('get spiders', done => {
    // mock return data from spider get
    const spiders = [1, 2, 3];

    // set the expectations
    $httpBackend
      // what http VERB and url are we expecting?
      .expectGET('/api/spiders')
      // mock response that will get set on .data
      // property of $http response object
      .respond(spiders);

    // make the call against SUT
    spiderService.get()
      .then(allSpiders => {
        // $httpBackend serializes the object
        // that we pass to .respond, so to 'test'
        // we need to do deepEqual as they are
        // no longer the same object reference
        assert.deepEqual(allSpiders, spiders);
        done();
      })
      .catch(done);

    // we need to tell the $httpBackend everything
    // is setup and okay to 'flush' (send) responses back
    $httpBackend.flush();
  });

  it('add spider', done => {

    const spider = {
      name: 'Spike',
      type: 'punk'
    };

    $httpBackend
      .expectPOST('/api/spiders', spider)
      .respond(spider);

    spiderService.add(spider)
      .then(savedSpider => {
        assert.deepEqual(savedSpider, spider);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });
});
