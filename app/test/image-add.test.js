// testing image-add components

describe('in the image-add component', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create a component to test against', () => {

    const fakeImage = {
      name: 'fake-image',
      description: 'the fake image',
      url: 'http://www.fake-image.mock',
      albumId: 'fake-album'
    };

    let component = null;

    before(() => {
      component = $component('imageAdd', {});

      component.name = fakeImage.name;
      component.description = fakeImage.description;
      component.url = fakeImage.url;

      component.addImage = function(image) {
        return image;
      };
    });


    it('adds an image and resets input fields', done => {
      component.addOneImage();
      assert.equal(component.name, '');
      assert.equal(component.description, '');
      assert.equal(component.url, '');
      done();
    });

    it('resets inputs fields', done => {
      component.name = 'fake name';
      component.description = 'fake image';
      component.url = 'fake url';

      component.reset();

      assert.equal(component.name, '');
      assert.equal(component.description, '');
      assert.equal(component.url, '');
      done();
    });

  });

});