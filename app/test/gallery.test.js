const assert = chai.assert;


describe('gallery app', () => {

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  var $component;

  beforeEach(angular.mock.inject(($componentController) => {
    $component = $componentController;
  }));

  describe('creates a new component', () => {

    const images = [
      { title:"Image 1", url:"www.images.com", description:"Look! an image!" },
      { title:"Image 2", url:"www.pictures.com", description:"A different image!" },
    ];

    const newImage = { title:"Image 3", url:"www.pic.com", description:"A more different image!" };
    const _id = 12345;

    const galleryService = {
      get() {
        return Promise.resolve(images);
      },
      add(image) {
        image._id = _id;
        return Promise.resolve(image);
      },
      remove(_id) {  // eslint-disable-line no-unused-vars
        return Promise.resolve(newImage);
      }
    };

    it('loads an image', done => {

      let imageAppComponent = null;
      imageAppComponent = $component('imageApp', { galleryService });

      setTimeout(() => {
        assert.deepEqual(imageAppComponent.images, images);
        done();
      });
    });

    it('adds a new image', done => {

      let imageAppComponent = null;
      imageAppComponent = $component('imageApp', { galleryService });
      imageAppComponent.add(newImage);

      setTimeout(() => {
        assert.equal(imageAppComponent.images.length, 3);
        assert.deepEqual(imageAppComponent.images[2], newImage);
        done();
      });
    });

    it('deletes an image', done => {

      let imageAppComponent = null;
      imageAppComponent = $component('imageApp', { galleryService });
      imageAppComponent.remove(_id);

      setTimeout(() => {
        assert.equal(imageAppComponent.images.length, 2);
        done();
      });
    });

  });

});