describe('album service', () => {
  const {assert} = chai;

  beforeEach(
      angular.mock.module('service', {apiUrl: ''})
  );

  let $httpBackend = null, albumService = null;

  beforeEach(angular.mock.inject((_albumService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    albumService = _albumService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('gets albums', done => {
    const albums = [1, 2, 3];

    $httpBackend
        .expectGET('/albums')
        .respond(albums);

    albumService.get()
        .then(allAlbums => {
          assert.deepEqual(allAlbums, albums);
          done();
        })
        .catch(done);

    $httpBackend.flush();
  });

  it('add an album', done => {

    const album = {  
      title: 'solths',
      description: 'sloth album',
    };

    $httpBackend
        .expectPOST('/albums', album)
        .respond(album);
    
    albumService.add1(album)
        .then(savedAlbum => {
          assert.deepEqual(savedAlbum, album);
          done();
        })
        .catch(done);

    $httpBackend.flush();
  });
});