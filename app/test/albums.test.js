describe( 'albums component', () => {
  const { assert } = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {
    const albums = [
      {title: 'sloths', description: 'sloth album'},
      {title: 'bats', description: 'bat album'}
    ];

    const album = {title: 'snails', description: 'snail album'};
    const _id = 123;

    const albumService = {
      get() {
        return Promise.resolve(albums);
      },
      add(album){
        album._id = _id;
        return Promise.resolve(album);
      }
    };

    const imageService = {
      get() {
        return Promise.resolve(albums);
      }
    };

    let component = null;

    it('loads albums', done => {

      component = $component('albums', {albumService, imageService});
      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.albums, albums);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('add an album', done => {
      component = $component('albums', {albumService, imageService});
      component.add(album);

      setTimeout(() => {
        assert.equal(albums.length, 3);
        assert.equal(albums[2], album);
        done();
      });
    });
  });
});