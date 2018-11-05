//testing the album service

describe('in the album service', () => {
  const {assert} = chai;

  //mocking the services module
  beforeEach(angular.mock.module('services', {apiUrl:'/api'}));
  let $httpBackend = null;
  let albumService = null;

  beforeEach(angular.mock.inject((_albumService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    albumService = _albumService_;
  }));

  //verify that $httpBackend worked to expectations
  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets albums', done => {
    const albums = ['a', 'b', 'c'];

    $httpBackend
      .expectGET('/api/albums')
      .respond(albums);

    albumService.getAll()
      .then(allAlbums => {
        assert.deepEqual(allAlbums, albums);
        done();
      })
      .catch(done);

    //tell $httpBackend isOk and to flush(send) res
    $httpBackend.flush();
  });

  const firstAlbum = {
    name: 'first-album',
    description: 'the first album',
    _id: '123'
  };

  it('adds an album', done => {

    $httpBackend
      .expectPOST('/api/albums', firstAlbum)
      .respond(firstAlbum);

    albumService.addAlbum(firstAlbum)
      .then(savedAlbum => {
        assert.deepEqual(savedAlbum, firstAlbum);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('removes an album', done => {

    $httpBackend
      .expectDELETE('/api/albums/123')
      .respond(firstAlbum);

    albumService.remove(firstAlbum._id)
      .then(removedAlbum => {
        assert.deepEqual(removedAlbum, firstAlbum);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});