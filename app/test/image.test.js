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
        { title: 'Test Rabbit 1', url: 'Test URL 1', desc: 'Test Rabbit Desc 1' },
        { title: 'Test Rabbit 2', url: 'Test URL 2', desc: 'Test Rabbit Desc 2' }
    ];

    const image = { title: 'Test Rabbit 3', url: 'Test URL 3', desc: 'Test Rabbit Desc 3' };
    const _id = 123;
    
    const imageService = {
      get() {
        return Promise.resolve(images);
      },
      add(image) {
        image._id = _id;
        return Promise.resolve(image);
      },
      remove(imageId) {
        assert.equal(imageId, _id);
        return Promise.resolve(true);
      }
    };

    let component = null;
    before(() => {
      component = $component('images', { imageService });
    });

    it( 'loads images', done => {
      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.images, images);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it( 'add an image', done => {

      component.add(image);

      setTimeout(() => {
        assert.equal(images.length, 3);
        assert.equal(images[2], image);
        done();
      });
    });

    it('removes image', done => {
      component.remove(image);

      setTimeout(() => {
        assert.equal(images.length, 2);
        assert.notInclude(images, image);
        done();
      });
    });

  });

}); 