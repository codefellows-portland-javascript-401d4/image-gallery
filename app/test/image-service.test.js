describe('image service', () => {
  const { assert } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api'})
  );

  let $httpBackend = null;
    imageService = null;

  beforeEach(angular.mock.inject((_imageService_, _$httpBackend_) => {
    imageService = _imageService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it.skip('GETs images', done => {
    const images = [a, b, c];
  });

  it.skip('POSTs a new image', done => {
    const image = {
      title: '',
      description: '',
      url: ''
    };
  });

  it.skip('DELETEs an image by id', done => {
    const testImage = {
      title: '',
      description: '',
      url: '',
      id: '1234'
    };
    
    const id = 1234;
  });

});
