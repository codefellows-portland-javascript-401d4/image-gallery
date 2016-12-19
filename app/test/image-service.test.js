
describe('image service', () => {
  const {assert} = chai;
  beforeEach(
    angular.mock.module('services', {apiUrl: '/'})
  );

  let $httpBackend = null, imageService = null, albumService = null;

  beforeEach(angular.mock.inject((_albumService_, _imageService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    imageService  = _imageService_;
    albumService = _albumService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets images from database', done => {
    const image = [1,2,3];
    $httpBackend
      .expectGET('/images')
      .respond(image);

    imageService.get()
      .then(images => {
        assert.deepEqual(images, image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('adds images', done => {
    const image = {
      title: 'title',
      description: 'description',
      url: 'http://url.com'
    };

    $httpBackend
      .expectPOST('/images', image)
      .respond(image);

    imageService.add(image)
      .then(saved => {
        assert.deepEqual(saved, image);
        done();
      })
      .catch(done);
    $httpBackend.flush();
  });

});