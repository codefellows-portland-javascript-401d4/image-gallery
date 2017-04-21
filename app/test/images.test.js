describe('images component', () => {
  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;

  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {

    const images = [
      {
        title: 'Image 1',
        url: 'www.test.com/image.jpg',
        description: 'Test image 1'
      },
      {
        title: 'Image 2',
        url: 'www.test.com/image2.jpg',
        description: 'Test image 2'
      }
    ];

    const image = {
      title: 'Image 3',
      url: 'www.test.com/image3.jpg',
      description: 'Test image 3'
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
    

    it('loads images', done => {
      const component = $component('images', { imageService });

      setTimeout(() => {
        assert.equal(component.images, images);
        done();
      });
    });

    it('adds image', done => {
      const component = $component('images', { imageService });
      
      component.add(image);

      setTimeout(() => {
        assert.equal(images.length, 3);
        assert.deepEqual(images[2], image);
        done();
      });
    });

    it('removes image', done => {
      const component = $component('images', { imageService });

      component.remove(image);
      setTimeout(() => {
        assert.equal(component.images.length, 2);
        done();
      });
    });
  });
});