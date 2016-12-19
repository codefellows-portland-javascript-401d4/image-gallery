describe('image app component', () => {
  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;

  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('images component', () => {
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

    const id = 1234;

    const imageService = {
      get() {
        return Promise.resolve(images); //eslint-disable-line
      },

      add(image) {
        return Promise.resolve(image); //eslint-disable-line
      },

      remove() {
        image._id = id;
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
      const component = $component('images', { imageService });
      component.add(image);

      setTimeout(() => {
        assert.equal(images.length, 4);
        assert.deepEqual(images[3], image);
        done();
      });
    });

    it('removes an image', done => {
      const component = $component('images', { imageService });
      component.remove(image);

      setTimeout(() => {
        assert.equal(images.length, 3);
        assert.equal(images.indexOf(image), -1);
        done();
      });
    });
  });
});
