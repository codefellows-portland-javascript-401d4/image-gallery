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
    const images = ['rabbit', 'url', 'desc'];
        
    $httpBackend
            .expectGET('/api/images')
            .respond(images);

        // make the call against SUT
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
      title: 'Desert Cottontail',
      url: 'https://en.wikipedia.org/wiki/File:Sylvilagus_audubonii_2.jpg',
      desc: 'The desert cottontail (Sylvilagus audubonii), also known as Audubon\'s cottontail, is a New World cottontail rabbit, and a member of the family Leporidae.'
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

  it('removes image', done => {

    const image = {
      id: '123'
    };
        
    $httpBackend
            .expectDELETE('/api/images/123')
            .respond(image);

    imageService.remove(image.id)
            .then(removedImage => {
              assert.deepEqual(removedImage, image);
              done();
            })
            .catch(done);

    $httpBackend.flush();
  });

});

