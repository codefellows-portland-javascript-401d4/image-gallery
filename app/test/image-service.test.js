//testing the services - e2e testing?

describe('in the image service', () => {
  const {assert} = chai;

  //mocking the services module
  beforeEach(angular.mock.module('services', {apiUrl:'/api'}));
  let $httpBackend = null;
  let imageService = null;

  beforeEach(angular.mock.inject((_imageService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    imageService = _imageService_;
  }));

  //verify that $httpBackend worked to expectations
  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets images', done => {
    const images = ['a', 'b', 'c'];

    $httpBackend
      .expectGET('/api/images')
      .respond(images);

    imageService.get()
      .then(allImages => {
        assert.deepEqual(allImages, images);
        done();
      })
      .catch(done);

    //tell $httpBackend isOk and to flush(send) res
    $httpBackend.flush();
  });

  const firstImage = {
    name: 'first-image',
    description: 'the first image',
    url: 'http://www.first-image.mock',
    _id: '123'
  };

  it('adds an image', done => {

    $httpBackend
      .expectPOST('/api/images', firstImage)
      .respond(firstImage);

    imageService.add(firstImage)
      .then(savedImage => {
        assert.deepEqual(savedImage, firstImage);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('removes an image', done => {

    $httpBackend
      .expectDELETE('/api/images/123')
      .respond(firstImage);

    imageService.remove(firstImage._id)
      .then(removedImage => {
        assert.deepEqual(removedImage, firstImage);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});