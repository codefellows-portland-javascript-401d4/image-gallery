describe( 'album service', () => {
  const { assert } = chai;

  beforeEach( 
        angular.mock.module('services', { apiUrl: '/api' })
    );
    
  let $httpBackend = null, albumService = null;
    
  beforeEach(angular.mock.inject((_albumService_, _$httpBackend_ ) => {
    $httpBackend = _$httpBackend_;
    albumService = _albumService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it( 'get albums', done => {
    const albums = ['Dogs', 'https://image.freepik.com/free-icon/photo-album_318-31831.jpg'];
        
    $httpBackend
            .expectGET('/api/albums')
            .respond(albums);

        // make the call against SUT
    albumService.get()
            .then(allAlbums => {
              assert.deepEqual(allAlbums, albums);
              done();
            })
            .catch(done);

    $httpBackend.flush();
  });


  it('add album', done => {

    const album = {
      name: 'More Rabbits',
      cover: 'https://en.wikipedia.org/wiki/File:Sylvilagus_audubonii_2.jpg'
    };
        
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

  it('removes album', done => {

    const album = {
      id: '123'
    };
        
    $httpBackend
            .expectDELETE('/api/albums/123')
            .respond(album);

    albumService.remove(album.id)
            .then(removedAlbum => {
              assert.deepEqual(removedAlbum, album);
              done();
            })
            .catch(done);

    $httpBackend.flush();
  });

});

