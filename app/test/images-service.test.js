const {assert} = chai;

describe('image service testing', () => {
    
    beforeEach(angular.mock.module('services', {apiUrl: '/api'}));
    
    let $httpBackend = null, imageService = null;

    beforeEach(angular.mock.inject((_imageService_, _$httpBackend_) => {
        imageService = _imageService_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(() => {
        //Go back and look at this
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('gets images', done => {
        const images = [1,2,3];

        $httpBackend
            .expectGET('/api/images')
            .respond(images);
        
        imageService
            .get()
            .then(allImages => {
                assert.deepEqual(allImages, images);
            })
            .catch(done);
        
        $httpBackend.flush();
    });
});