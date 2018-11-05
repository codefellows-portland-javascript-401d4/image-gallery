//testing images component

describe('in the albums component', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector(); //use before instead of beforeEach

  before(angular.mock.module('components')); //bring in components module

  //$componentController allows creation of component instances
  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  
  describe('create a album component to test against', () => {

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
      },
      {
        name: 'third-album',
        description: 'the third album',
        url: 'http://www.third-album.mock',
        _id: 3333
      }
    ];

    //making mocks cuz unit-testing
    //hard-coding an id cuz mock
    //only giving the specific method to test cuz mock
    const albumService = {
      remove(albumId) {
        const _id = 3333;
        assert.equal(albumId, _id);
        return Promise.resolve(true);
      }
    };

    let component = null;
    before(() => {
      component = $component('albums', {albumService});
      component.albums = albums;
    });

    it('loads albums', done => {
      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.albums, albums);
        done();
      });
    });

    it('removes an album', done => {
      let thirdAlbum = component.albums[2];
      component.removeAlbum(thirdAlbum);

      setTimeout(() => {
        assert.equal(albums.length, 2);
        assert.notInclude(albums, thirdAlbum);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('toggles the view based on name passed', done => {
      let name = 'test-name';
      
      component.toggleView(name);

      setTimeout(() => {
        assert.equal(name, component.view);
        done();
      });
    });

  });
});