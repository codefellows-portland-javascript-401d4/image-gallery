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

  
  describe('create an image component to test against', () => {

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
      },
      {
        name: 'third-image',
        description: 'the third image',
        url: 'http://www.third-image.mock',
        _id: 3333
      }
    ];

    //making mocks cuz unit-testing
    //hard-coding an id cuz mock
    //only giving the specific method to test cuz mock
    const imageService = {
      remove(imageId) {
        const _id = 3333;
        assert.equal(imageId, _id);
        return Promise.resolve(true);
      }
    };

    let component = null;
    before(() => {
      component = $component('images', { imageService });
      component.images = images;
    });

    it('loads images', done => {
      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.images, images);
        done();
      });
    });

    it('removes an image', done => {
      let thirdImage = component.images[2];
      component.removeImage(thirdImage);

      setTimeout(() => {
        assert.equal(images.length, 2);
        assert.notInclude(images, thirdImage);
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