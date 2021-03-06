describe( 'image service', () => {
	const { assert } = chai;


    // we need to mock the services module, that's were
    // image service lives
	beforeEach( 
        angular.mock.module('services', { apiUrl: '/api' })
    );
    
	let $httpBackend = null, imageService = null;
    
	beforeEach(angular.mock.inject((_imageService_, _$httpBackend_ ) => {
		$httpBackend = _$httpBackend_;
		imageService = _imageService_;
	}));

	afterEach(() => {
        // make sure the $httpBackend expectations that we set up
        // have actually happened
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it( 'get images', done => {
        // mock return data from image get
		const images = [1, 2, 3];
        
        // set the expectation
		$httpBackend
            // what http VERB and url are we expecting?
            .expectGET('/api/images')
            // mock a reponse that will get set on the .data 
            // property of $http response object
            .respond(images);

        // make the call against SUT
		imageService.get()
            .then(allimages => {
                // $httpBackend serializes the object we pass to
                // .respond, so to "test" we need to do 
                // deepEqual as they are no longer the same object reference
	assert.deepEqual(allimages, images);
	done();
})
            .catch(done);

        // we need to tell $httpBackend everything is setup and okay
        // to "flush" (send) reponses back
		$httpBackend.flush();
	});


	it('add image', done => {

		const image = {
			title: 'x',
			url: 'xx',
			description: 'xxx'
		};
        
		$httpBackend
            .expectPOST('/api/images', image)
            .respond(image);

		imageService.add(image)
            .then(savedimage => {
	assert.deepEqual(savedimage, image);
	done();
})
            .catch(done);

		$httpBackend.flush();
	});
});
