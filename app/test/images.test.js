describe('images component', () => {
  const {assert} = chai;

  beforeEach(angular.mock.module('components'));

  let $component = null;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {
    const images = [
      {title: 'cat', description: 'a cat', url: 'http://www.cat.com'},
      {title: 'dog', description: 'a dog', url: 'http://www.dog.com'}
    ];

    const image = {title: 'bird', description: 'a bird', url: 'http://www.bird.com'};

    const imageService = {
      getAll() {
        return Promise.resolve(images);
      },
      addImage(image) {
        return Promise.resolve(image);
      },
      removeImage(image) {
        return Promise.resolve(image);
      }
    };

    const component = $component('images', (imageService));

    it('loads images', done => {
      setTimeout(() => {
        assert.equal(component.images, images);
        done();
      });
    });

    it('adds an image', done => {
      component.addImage(image);

      setTimeout(() => {
        assert.equal(images.length, 3);
        assert.equal(images[2], image);
        done();
      });
    });

    it('deletes an image', done => {
      component.removeImage(image);

      setTimeout(() => {
        assert.equal(images.length, 2);
        done();
      });
    });
  });
});