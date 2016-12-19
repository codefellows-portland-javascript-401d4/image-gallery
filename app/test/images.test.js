describe('images component', () => {
  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;

  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('new component', () => {
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
        return Promise.resolve(images);
      },

      add(image) {
        return Promise.resolve(image);
      },

      remove() {
        return Promise.resolve(image);
      }
    };

    it.skip('loads images', done => {
      const component = $component('images', { imageService });
    });

    it.skip('adds new image', done => {
      const component = $component('images', { imageService });
    });

    it.skip('removes image', done => {
      const component = $component('images', { imageService });
    });
  })
})