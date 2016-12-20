describe( 'images component', () => {
  const { assert } = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {
    const images = [
      {title: 'bunny', description: 'bunny photo'},
      {title: 'cat', description: 'cat photo'}
    ];

    const image = {title: 'dog', description: 'dog photo'};
    const _id = 123;

    const imageService = {
      get() {
        return Promise.resolve(images);
      },
      add(image){
        image._id = _id;
        return Promise.resolve(image);
      }
    };

    const albumService = {
      get() {
        return Promise.resolve();
      }
    };

    let component = null;

    it('loads images', done => {

      component = $component('parentComp', {imageService, albumService});
      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.images, images);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('add an images', done => {
      component = $component('parentComp', {imageService, albumService});
      component.add(image);

      setTimeout(() => {
        assert.equal(images.length, 3);
        assert.equal(images[2], image);
        done();
      });
    });
  });
});