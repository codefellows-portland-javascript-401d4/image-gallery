describe('image service test', () => {
  const { assert } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api' })
  );

  let $httpBackend = null,
    imageService = null;
      
  beforeEach(angular.mock.inject((_imageService_, _$httpBackend_) => {
    imageService = _imageService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets images', done => {
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

  it('posts image', done => {
    
    const image = {
      title: 'Service Test Image',
      url: 'www.servicetest.com/testimage.jpg',
      description: 'Test image for the services test' 
    };

    $httpBackend
      .expectPOST('/api/images', image)
      .respond(image);

    imageService.add(image)
        .then(saved => {
          assert.deepEqual(saved, image);
          done();
        })
        .catch(done);

    $httpBackend.flush();
  });

  it('deletes image', done => {
    const newImage = {
      title: 'Image Deletion',
      url: 'www.image.com/delete,jpg',
      description: 'Test image for deletion',
      id: '123'
    };
    const id = 123;

    $httpBackend.expectDELETE(`/api/images/${ id }`)
    .respond(newImage);

    imageService
      .remove(id)
      .then(deleted => {
        assert.deepEqual(deleted, newImage);
        done();
      })
      .catch(done);

    $httpBackend.flush();


  });
});