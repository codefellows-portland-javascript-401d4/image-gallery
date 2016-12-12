
describe('image service', () => {
  const {assert} = chai;

  beforeEach(
      angular.mock.module('service', {apiUrl: ''})
  );

  let $httpBackend = null, imageService = null;

  beforeEach(angular.mock.inject((_imageService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    imageService = _imageService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets images', done => {
    const images = [1, 2, 3];

    $httpBackend
        .expectGET('/images')
        .respond(images);

    imageService.get()
        .then(allImages => {
          assert.deepEqual(allImages, images);
          done();
        })
        .catch(done);

    $httpBackend.flush();
  });

  it('add an image', done => {

    const image = {  
      title: 'cute buuny',
      description: 'bunny photo',
      url: 'www.fakeurl.com',
      fullImage: 'www.fakeurl1.com',
      thumbnail: 'www.fakeurl2.com'
    };

    $httpBackend
        .expectPOST('/images', image)
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