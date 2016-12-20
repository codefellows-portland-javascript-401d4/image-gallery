describe( 'image service', () => {
    const { assert } = chai;
    

    beforeEach( 
        angular.mock.module('services', { apiUrl: '/api' })
    );

    let $httpBackend = null, imageService = null;


    beforeEach(angular.mock.inject((_imageService_, _$httpBackend_ ) => {
        $httpBackend = _$httpBackend_;
        imageService = _imageService_;
    }));

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it( 'get images', done => {
        const images = [1, 2, 3];

        $httpBackend
            .expectGET('/api/images')
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
            image_title: 'very small bunny',
            url: 'http://2.bp.blogspot.com/-9zGBe_NutEA/TkzFaY2He1I/AAAAAAAAA_M/FYXoFdKWCeE/s640/cute+bunny+010.jpg',
            image_description: 'a small bunny'
        };

        $httpBackend
            .expectPOST('/api/images', image)
            .respond(image);

        imageService.add(image)
            .then(newImage => {
                assert.deepEqual(newImage, image);
                done();
                })
                .catch(done);

        $httpBackend.flush();


    });

});