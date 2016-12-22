// testing image-add component

describe('in the album-add component', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create an album-add component to test against', () => {

    const fakeAlbum = {
      name: 'fake-album',
      description: 'the fake album',
      url: 'http://www.fake-album.mock',
    };

    let component = null;

    before(() => {
      component = $component('albumAdd', {});

      component.name = fakeAlbum.name;
      component.description = fakeAlbum.description;
      component.url = fakeAlbum.url;

      component.addAlbum = function(album) {
        return album;
      };
    });


    it('adds an album and resets input fields', done => {
      component.addOneAlbum(fakeAlbum);

      assert.equal(component.name, '');
      assert.equal(component.description, '');
      done();
    });

    it('resets inputs fields', done => {
      component.name = 'fake name';
      component.description = 'fake image';
      component.url = 'fake url';

      component.reset();

      assert.equal(component.name, '');
      assert.equal(component.description, '');
      done();
    });

  });

});