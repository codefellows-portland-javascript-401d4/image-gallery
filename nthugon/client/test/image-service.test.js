
describe('image service', () => {
    const { assert } = chai;

    angular.mock.module.sharedInjector();


    // we need to mock the services module, that's were
    // image service lives
    before(angular.mock.module('services', { apiUrl: '/api' }));
    
    let $httpBackend = null, imageService = null;
    
    before(angular.mock.inject((_imageService_, _$httpBackend_ ) => {
        $httpBackend = _$httpBackend_;
        imageService = _imageService_;
    }));

    afterEach(() => {
        // make sure the $httpBackend expectations that we set up
        // have actually happened
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('get images', done => {
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
            .then(allImages => {
                // $httpBackend serializes the object we pass to
                // .respond, so to "test" we need to do 
                // deepEqual as they are no longer the same object reference
                assert.deepEqual(allImages, images);
                done();
            })
            .catch(done);

        // we need to tell $httpBackend everything is setup and okay
        // to "flush" (send) reponses back
        $httpBackend.flush();
    });

    it('add image', done => {

        const image = {
            title: 'Big Bunny',
            url: 'http://www.fakepictureurl.com',
            description: 'Here is a picure of a really big bunny.'
        };
  
        $httpBackend
            .expectPOST('/api/images', image)
            .respond(image);

        imageService.add(image)
            .then(savedImage => {
                assert.deepEqual(savedImage, image);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('deletes an image', done => {

        const image = {
            title: 'Big Bunny',
            url: 'http://www.fakepictureurl.com',
            description: 'Here is a picure of a really big bunny.',
            id: 12345
        };
        
        $httpBackend
            .expectDELETE('/api/images/12345')
            .respond(image);

        imageService.remove(image.id)
            .then(deletedImage => {
                assert.deepEqual(deletedImage, image);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

});
