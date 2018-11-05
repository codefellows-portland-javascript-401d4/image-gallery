describe('album service', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('services', {apiUrl: '/api'}));

  let $httpBackend = null, albumService = null;

  before(angular.mock.inject((_albumService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    albumService = _albumService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets albums', done => {

    const albums = [1,2,3];

    $httpBackend

      .expectGET('/api/albums')
      .respond(albums);

    albumService.get()
      .then(allAlbums => {
        assert.deepEqual(allAlbums, albums);
        done();
      })
      .catch(done);
    $httpBackend.flush();
  });

  it('add album', done => {

    const album = {name: 'My Album'};

    $httpBackend
      .expectPOST('/api/albums', album)
      .respond(album);

    albumService.add(album)
      .then(savedAlbum => {
        assert.deepEqual(savedAlbum, album);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});


