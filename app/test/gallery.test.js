//testing gallery component

describe('in the gallery component', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector(); //use before instead of beforeEach

  before(angular.mock.module('components')); //bring in components module

  //$componentController allows creation of component instances
  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  
  describe('create an gallery component to test against', () => {

    const fakeImage = {
      name: 'fake-image',
      description: 'the fake image',
      url: 'http://www.fake-image.mock',
      albumId: 'fake-album'
    };
    
    const fakeAlbum = {
      name: 'fake-album',
      description: 'the fake album',
      url: 'http://www.fake-album.mock',
      albumId: 'fake-album'
    };
    
    const images = [
      {
        name: 'first-image',
        description: 'the first image',
        url: 'http://www.first-image.mock',
        _id: 1111
      },
      {
        name: 'second-image',
        description: 'the second image',
        url: 'http://www.second-image.mock',
        _id: 2222
      }
    ];

    const albums = [
      {
        name: 'first-album',
        description: 'the first album',
        url: 'http://www.first-album.mock',
        _id: 1111
      },
      {
        name: 'second-album',
        description: 'the second album',
        url: 'http://www.second-album.mock',
        _id: 2222
      }
    ];

    //making mocks cuz unit-testing
    //hard-coding an id cuz mock
    //only giving the specific method to test cuz mock
    const imageService = {
      addImage(image) {
        assert.equal(image.name, 'fake-image');
        return Promise.resolve(image);
      }
    };

    const albumService = {
      addAlbum(album) {
        assert.equal(album.name, 'fake-album');
        return Promise.resolve(album);
      }
    };

    let component = null;
    before(() => {
      component = $component('gallery', {imageService, albumService});
      component.images = images;
      component.albums = albums;
    });


    it('adds an image', done => {
      component.addImage(fakeImage);

      setTimeout(() => {
        assert.strictEqual(component.images.length, 3);
        assert.equal(component.images[2].name, 'fake-image');
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('adds an album', done => {
      component.addAlbum(fakeAlbum);

      setTimeout(() => {
        console.log(component.albums[2]);
        assert.strictEqual(component.albums.length, 3);
        assert.equal(component.albums[2].name, 'fake-album');
        assert.isNotOk(component.loading);
        done();
      });
    });

  });
});