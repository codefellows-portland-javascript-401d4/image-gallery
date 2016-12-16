/* globals angular chai*/
describe( 'album service', () => {
	const { assert } = chai;


    // we need to mock the services module, that's were
    // image service lives
	beforeEach( 
        angular.mock.module('services', { apiUrl: '/api' })
    );
    
	let $httpBackend = null, albumService = null;
    
	beforeEach(angular.mock.inject((_albumService_, _$httpBackend_ ) => {
		$httpBackend = _$httpBackend_;
		albumService = _albumService_;
	}));

	afterEach(() => {
        // make sure the $httpBackend expectations that we set up
        // have actually happened
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it( 'get albums', done => {
        // mock return data from image get
		const albums = [1, 2, 3];
        
        // set the expectation
		$httpBackend
            // what http VERB and url are we expecting?
            .expectGET('/api/albums')
            // mock a reponse that will get set on the .data 
            // property of $http response object
            .respond(albums);

        // make the call against SUT
		albumService.get()
            .then(allalbums => {
                // $httpBackend serializes the object we pass to
                // .respond, so to "test" we need to do 
                // deepEqual as they are no longer the same object reference
	assert.deepEqual(allalbums, albums);
	done();
})
            .catch(done);

        // we need to tell $httpBackend everything is setup and okay
        // to "flush" (send) reponses back
		$httpBackend.flush();
	});

	it('add an album', done => {

		const album = {
			title: 'y',
			description: 'yy'
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


});
