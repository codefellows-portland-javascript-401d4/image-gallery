describe('Image-service', () => {
  const { assert } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api' })
  );

  let $httpBackend = null, imageService = null;
  const image = {
    title: 'junk city',
    description: 'Junk cityyyyyy.',
    url: 'www.image.com'
  };

  beforeEach(angular.mock.inject((_imageService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    imageService = _imageService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('Gets images', done => {
    const images = [1, 2, 3];

    $httpBackend
      .expectGET('/api/images')
      .respond(images);

    imageService.get()
      .then(allImages => {
        assert.deepEqual(allImages, images);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('POST image', done => {

    $httpBackend
      .expectPOST('/api/images', image)
      .respond(image);

    imageService.add(image)
      .then(newImg => {
        assert.deepEqual(newImg, image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('Removes image', done => {

    $httpBackend
      .expectDELETE('/api/images/123')
      .respond(image);

    imageService.remove(123)
      .then(deleted => {
        assert.deepEqual(deleted, image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});