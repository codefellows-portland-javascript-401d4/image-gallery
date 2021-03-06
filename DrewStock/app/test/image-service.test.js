
describe('image service', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('services', {apiUrl: '/api'}));

  let $httpBackend = null, imageService = null;

  before(angular.mock.inject((_imageService_, _$httpBackend_) => {
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

  it('add image', done => {

    const image = {url: 'http://www.publicdomainpictures.net/pictures/90000/velka/cute-bunny-rabbit.jpg', imageTitle: 'Funny hair bunny', imageDescription: 'This is a bunny with funny hair'};

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

});
