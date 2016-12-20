describe('image app components', () => {
  const { assert } = chai;

  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  let $component = null;

  before(
    angular.mock.inject($componentController => {
      $component = $componentController;
    })
  );

  const testImage = {
    title: 'Test 1',
    description: 'Test image 1',
    url: 'http://i.imgur.com/4evAqkh.jpg'
  };

  describe('images parent component', () => {
    const images = [
      {
        title: 'Test 2',
        description: 'Test image 2',
        url: 'http://i.imgur.com/4evAqkh.jpg'
      },

      {
        title: 'Test 3',
        description: 'Test image 3',
        url: 'http://i.imgur.com/yqtLojN.jpg'
      },
    ];

    const imageService = {
      get() {
        return Promise.resolve(images); //eslint-disable-line
      },

      add(image) {
        return Promise.resolve(image); //eslint-disable-line
      },

      remove(image) {
        return Promise.resolve(image); //eslint-disable-line
      }
    };

    it('gets images', done => {
      const component = $component('images', { imageService });

      setTimeout(() => {
        assert.equal(component.images, images);
        done();
      });
    });

    it('adds a new image', done => {
      let component = $component('images', { imageService });
      
      component.add(testImage);

      setTimeout(() => {
        assert.equal(images.length, 3);
        assert.equal(images[2], testImage);
        done();
      });
    });

    it('removes an image', done => {
      let component = $component('images', { imageService });
      
      component.remove(testImage);

      setTimeout(() => {
        assert.equal(images.length, 2);
        assert.equal(images.indexOf(testImage), -1);
        done();
      });
    });
  });

  describe('addNew method in image-new component', () => {
    let newImage = null;
    let addedImage = null;

    it('adds new image', done => {
      newImage = $component('imageNew', null, {
        add(image) { addedImage = image; }
      });

      newImage.title = testImage.title;
      newImage.description = testImage.description;
      newImage.url = testImage.url;

      newImage.addNew(testImage);
      assert.deepEqual(addedImage, testImage);
      done();
    });
  });

  describe('remove method in image-full component', () => {
    let fullImage = null;
    let removedImage = null;

    it('removes an image', done => {
      fullImage = $component('imageFull', null, {
        remove(image) { removedImage = image; }
      });

      fullImage.remove(testImage);
      assert.deepEqual(removedImage, testImage);
      done();
    });
  });
});
