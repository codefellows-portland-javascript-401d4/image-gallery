const assert = chai.assert;


describe('Gallery Service', () => {

  beforeEach(angular.mock.module('services', { apiUrl: '/api/gallery' }));

  let $httpBackend = null;
  let galleryService = null;

  beforeEach(angular.mock.inject((_galleryService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    galleryService = _galleryService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  it('gets images from a mocked backend', done => {

    const images = [{"title":"An image","url":"http://www.image.com","description":"an image"}];

    $httpBackend
      .expectGET('/api/gallery/')  // what http VERB and url are we expecting?
      .respond(images);  // mock a response, set on the .data property of $http response object

    galleryService.get()
      .then(allImages => {
        assert.deepEqual(allImages, images);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('adds a new image', done => {

    const newImage = { title:"Image 3", url:"www.pic.com", description:"A more different image!" };

    $httpBackend
      .expectPOST('/api/gallery/', newImage)
      .respond(newImage);

    galleryService.add(newImage)
      .then(savedImage => {
        assert.deepEqual(savedImage, newImage);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});