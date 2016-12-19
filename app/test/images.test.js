describe('images component', () => {
  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;

  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('creation of component', () => {
    const images = [
      {
        title: 'Test 1',
        description: 'Test image 1',
        url: 'http://i.imgur.com/4evAqkh.jpg'
      },

      {
        title: 'Test 2',
        description: 'Test image 2',
        url: 'http://i.imgur.com/9oGI5Tz.jpg'
      },

      {
        title: 'Test 3',
        description: 'Test image 3',
        url: 'http://i.imgur.com/yqtLojN.jpg'
      },
    ];

    const image = {
      title: 'Test 2',
      description: 'Test image 2',
      url: 'http://i.imgur.com/9oGI5Tz.jpg'
    };

    const imageService = {
      get() {
        return Promise.resolve(images); //eslint-disable-line
      },

      add(image) {
        return Promise.resolve(image); //eslint-disable-line
      },

      remove() {
        return Promise.resolve(image); //eslint-disable-line
      }
    };

    it('loads images in preview view', done => {
      const component = $component('imagePreview', { imageService });

      setTimeout(() => {
        assert.equal(component.images, images);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('loads images in detail view', done => {
      const component = $component('imageDetail', { imageService });

      setTimeout(() => {
        assert.equal(component.images, images);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('loads images in full view', done => {
      const component = $component('imageFull', { imageService });

      setTimeout(() => {
        assert.equal(component.images, images);
        assert.isNotOk(component.loading);
        done();
      });
    });
  });
});
