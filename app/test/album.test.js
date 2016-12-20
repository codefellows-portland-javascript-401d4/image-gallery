describe( 'albums component', () => {
  const { assert } = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let $component = null;
  let $state = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {

    const albums = [
        { name: 'Test Album 1', cover: 'Test URL 1'},
        { name: 'Test Album 2', cover: 'Test URL 2'}
    ];

    const album = { name: 'Test Album 3', cover: 'Test URL 3' };
    const _id = 1234;
    
    const albumService = {
      get() {
        return Promise.resolve(albums);
      },
      add(album) {
        album._id = _id;
        return Promise.resolve(album);
      // },
      // remove(albumId) {
      //   assert.equal(albumId, _id);
      //   return Promise.resolve(true);
      }
    };

    let component = null;
    before(() => {
      component = $component('albums', { albumService, $state });
    });

    it( 'loads albums', done => {
      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.albums, albums);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it( 'add an album', done => {

      component.add(album);

      setTimeout(() => {
        assert.equal(albums.length, 3);
        assert.equal(albums[2], album);
        done();
      });
    });

    // it('removes album', done => {
    //   component.remove(album);

    //   setTimeout(() => {
    //     assert.equal(albums.length, 2);
    //     assert.notInclude(albums, album);
    //     done();
    //   });
    // });

  });

}); 