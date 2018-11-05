describe('image service', () => {
  const { assert } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api'})
  );

  let $httpBackend = null;
  let imageService = null;

  beforeEach(angular.mock.inject((_imageService_, _$httpBackend_) => {
    imageService = _imageService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('GETs all images', done => {
    const images = [1,2,3];

    $httpBackend
      .expectGET('/api/images')
      .respond(images);

    imageService
      .get()
      .then(allImages => {
        assert.deepEqual(allImages, images);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('POSTs a new image', done => {
    const image = {
      title: 'Image-service test image',
      description: 'Test image for image-service',
      url: 'http://i.imgur.com/yqtLojN.jpg'
    };

    $httpBackend
      .expectPOST('/api/images', image)
      .respond(image);

    imageService
      .add(image)
      .then(saved => {
        assert.deepEqual(saved, image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('DELETEs an image by id', done => {
    const removed = {
      title: 'Remove-image test',
      description: 'Test image for image-remove',
      url: 'http://i.imgur.com/9oGI5Tz.jpg',
      id: '1234'
    };
    
    const id = 1234;

    $httpBackend
      .expectDELETE(`/api/images/${ id }`)
      .respond(removed);

    imageService
      .remove(id)
      .then(deleted => {
        assert.deepEqual(deleted, removed);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });
});
