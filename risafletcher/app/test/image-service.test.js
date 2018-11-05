describe('image service', () => {
  const {assert} = chai;

  beforeEach(
    angular.mock.module('services', {apiUrl: '/api'})
  );

  let $httpBackend = null, imageService = null;

  beforeEach(angular.mock.inject((_imageService_, _$httpBackend_ ) => {
    $httpBackend = _$httpBackend_;
    imageService = _imageService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets images', done => {
    const images = [1,2,3];

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

  it('adds an image', done => {
    const image = {
      name: 'Two Kittens',
      src: 'https://cdn.pixabay.com/photo/2013/11/05/14/31/cat-205757_1280.jpg',
      description: 'Kittens in a blanket'
    };

    $httpBackend
      .expectPOST('/api/images', image)
      .respond(image);

    imageService.add(image)
        .then(savedImage => {
          assert.deepEqual(savedImage, image);
          done();
        })
        .catch(done);
    $httpBackend.flush();
  });

  it('deletes an image', done => {
    const image = {
      name: 'Two Kittens',
      src: 'https://cdn.pixabay.com/photo/2013/11/05/14/31/cat-205757_1280.jpg',
      description: 'Kittens in a blanket',
      id: 666
    };

    const id = 666;

    $httpBackend
      .expectDELETE(`/api/images/${id}`)
      .respond(image);

    imageService.remove(id)
      .then(removedImage => {
        assert.deepEqual(removedImage, image);
        done();
      })
      .catch(done);
    $httpBackend.flush();
  });
});