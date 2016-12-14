describe('image service', () => {
    
    const assert = chai.assert;

    beforeEach(
        angular.mock.module('services', { apiUrl: '/api' })
    );

    let $httpBackend = null, imageService = null;
    $httpBackend.whenGET(/api/).respond(200, '');

    beforeEach(angular.mock.inject((_imageService_, _$httpBackend_ ) => {
        $httpBackend = _$httpBackend_;
        imageService = _imageService_;
    }));

    afterEach( () => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it( 'get all images', done => {
        
        const images = [1, 2, 3, 4, 5];

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

    it( 'add an image', done => {
    
        const muskOx = {
            title: 'Musk Ox',
            description: 'A baby musk ox - how cute!',
            url: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr01/2013/1/30/15/enhanced-buzz-10140-1359576923-0.jpg'
        };

        $httpBackend
            .expectPOST('/api/images', muskOx)
            .respond(muskOx);

        imageService.add(muskOx)
            .then(savedImage => {
                assert.deepEqual(savedImage, muskOx);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

});