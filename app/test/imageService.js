describe('image service', () => {
  const {assert} = chai;

  beforeEach(angular.mock.module('services', {apiUrl: '/api'}));

  let $httpBackend = null, imageService = null;

  beforeEach(angular.mock.inject((_imageService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    imageService = _imageService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingrequest();
  });

  it('get images', done => {
    const images = [1, 2, 3];

    $httpBackend
      .expectGET('/api/images')
      .respond(images);

    imageService.getAll()
      .then(allImages => {
        assert.deepEqual(allImages, images);
        done();
      })
      .catch(done);
    $httpBackend.flush();
  });

  it('adds an image', done => {
    const image = {
      title: 'mouse',
      description: 'a mouse',
      url: 'http://www.mouse.com'
    };

    $httpBackend
      .expectPOST('/api/images')
      .respond(image);
    
    imageService.add(image)
      .then(savedImage => {
        assert.deepEqual(savedImage, image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  // it('deletes an image', done => {
  //   const images = [1, 2, 3];

  //   $httpBackend
  //     .expectDELETE('/api/images/:id')
  //     .respond(image);
  // })

});