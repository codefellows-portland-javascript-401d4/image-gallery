describe( 'image service', () => {
    const { assert } = chai;


    // we need to mock the services module, that's were
    // pirate service lives
    beforeEach( 
        angular.mock.module('services', { apiUrl: '/api' })
    );

    let $httpBackend = null, imageService = null;


    beforeEach(angular.mock.inject((_imageService_, _$httpBackend_ ) => {
        $httpBackend = _$httpBackend_;
        imageService = _imageService_;
    }));

    afterEach(() => {
        $httpBackEnd.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it( 'get images', done => {
        const images = [1, 2, 3];

        $httpBackend
            .expectGet('/api/images')
            .respond(images);

        imageService.get()
            .then(allImages => {
                assert.deepEqual(allImages, images);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('add image', done => {
        const image = {

        }
    })


});