const {assert} = chai;

describe('album service testing', () => {
    
    beforeEach(angular.mock.module('services', {apiUrl: '/api'}));

    let $httpBackend = null, albumService = null;

    beforeEach(angular.mock.inject((_albumService_, _$httpBackend_) => {
        albumService = _albumService_;
        $httpBackend = _$httpBackend_;
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

        albumService
            .getAll()
            .then(allAlbums => {
                assert.deepEqual(allAlbums, albums);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('gets specific album', done => {
        const album = {name: 'whatever'};

        $httpBackend
            .expectGET('/api/albums/album')
            .respond(album);

        albumService
            .getAlbum('album')
            .then(fetchedAlbum => {
                assert.deepEqual(fetchedAlbum, album);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    describe('posts and deletes an album', () => {
        const newAlbum = {name: 'kagerou', id: '1234'};

        it('adds a new album', done => {

            $httpBackend
                .expectPOST('/api/albums', newAlbum)
                .respond(newAlbum);

            albumService
                .add(newAlbum)
                .then(postedAlbum => {
                    assert.deepEqual(postedAlbum, newAlbum);
                    done();
                })
                .catch(done);

            $httpBackend.flush();
        });

        it('deletes same album', done => {

            $httpBackend
                .expectDELETE('/api/albums/1234')
                .respond(newAlbum);

            albumService
                .remove('1234')
                .then(deletedAlbum => {
                    assert.deepEqual(deletedAlbum, newAlbum);
                    done();
                })
                .catch(done);

            $httpBackend.flush();
        });
    });
});