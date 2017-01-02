describe('albums component', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let $component = null;

  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {

    const albums = [ {name: 'Album 1'}, {name: 'Album 2'}
    ];

    const album = {name: 'Test Album'};

    const albumService = {
      getAll() {
        return Promise.resolve(albums);
      },
      add(album) {
        return Promise.resolve(album);
      }
    };

    let component = null;

    before(() => {
      component = $component('albums', {albumService});
    });

    it('loads albums', done => {

      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.albums, albums);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('adds an album', done => {

      component.add(album);

      setTimeout(() => {
        assert.equal(albums.length, 3);
        assert.equal(albums[2], album);
        done();
      });
    });
  });
});