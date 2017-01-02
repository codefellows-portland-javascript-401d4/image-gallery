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


  it('gets albums from a mocked backend', done => {

    const albums = [{"title":"Album 1","description":"Bunnies"},
      {"title":"Album 2","description":"Kittens"}];

    $httpBackend
      .expectGET('/api/gallery/')  // what http VERB and url are we expecting?
      .respond(albums);  // mock a response, set on the .data property of $http response object

    galleryService.getAlbums()
      .then(allAlbums => {
        assert.deepEqual(allAlbums, albums);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('gets an album by id from a mocked backend', done => {

    const albums = [{"title":"Album 1","description":"Bunnies", "_id": 123},
      {"title":"Album 2","description":"Kittens", "_id": 234}];
    const id = 123;

    $httpBackend
      .expectGET('/api/gallery/albums/' + id)
      .respond(albums[0]);

    galleryService.getAlbum(id)
      .then(album => {
        assert.deepEqual(album, albums[0]);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('adds a new album with mocked backend', done => {

    const newAlbum =  {"title":"Album 3","description":"Puppies", "_id": 354};

    $httpBackend
      .expectPOST('/api/gallery/albums/')
      .respond(newAlbum);

    galleryService.addAlbum(newAlbum)
      .then(res => {
        assert.deepEqual(res, newAlbum);
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

    galleryService.addImage(newImage)
      .then(savedImage => {
        assert.deepEqual(savedImage, newImage);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('gets an image by id', done => {

    const image = { title:"Image 3", url:"www.pic.com", description:"A more different image!", "_id":123 };
    const id = 123;

    $httpBackend
      .expectGET('/api/gallery/images/' + id)
      .respond(image);

    galleryService.getImage(id)
      .then(savedImage => {
        assert.deepEqual(savedImage, image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('updates an image by id', done => {

    const image = { title:"Image 1", url:"www.pic.com", description:"A more different image!", "_id":123 };
    const id = 123;

    $httpBackend
      .expectPUT('/api/gallery/images/' + id)
      .respond(image);

    galleryService.updateImage(id)
      .then(updatedImage => {
        assert.deepEqual(updatedImage, image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('removes an image', done => {

    const removeImage = { title:"Image 4",
      url:"www.picture.com",
      description:"An even more different image",
      _id: 1234
    };
    //const headers = {"Accept":"application/json, text/plain, */*"};
    const id = 1234;

    $httpBackend
      .expectDELETE('/api/gallery/images/' + id)
      .respond(removeImage);

    galleryService.removeImage(id)
      .then(deleted => {
        assert.deepEqual(deleted, removeImage);
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });

});