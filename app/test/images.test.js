//testing images components

describe('in the images component', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector(); //use before instead of beforeEach

  before(angular.mock.module('components')); //bring in components module

  //$componentController allows creation of component instances
  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  
  describe('create a component to test against', () => {

    const images = [
      {
        name: 'first-image',
        description: 'the first image',
        url: 'http://www.first-image.mock'
      },
      {
        name: 'second-image',
        description: 'the second image',
        url: 'http://www.second-image.mock'
      }
    ];

    const thirdImage = {
      name: 'third-image',
      description: 'the third image',
      url: 'http://www.third-image.mock'
    };
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

    it('loads images', done => {
      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.images, images);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('adds an image', done => {
      component.add(thirdImage);

      setTimeout(() => {
        assert.equal(images.length, 3);
        assert.equal(images[2], thirdImage);
        done();
      });
    });

    it('removes an image', done => {
      component.remove(thirdImage);

      setTimeout(() => {
        assert.equal(images.length, 2);
        assert.notInclude(images, thirdImage);
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