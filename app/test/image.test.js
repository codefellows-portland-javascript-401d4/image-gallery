describe('Image gallery component', () => {
  const {assert} = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;

  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('Create component', () => {
    const images = [
      { url: 'imageurl.com', image_title: 'image3', image_description: 'tinylittlebunny' }
    ];

    const imageService = {
      get() {
        return Promise.resolve(images);
      }
    };

    // const component = $component('images', { imageService });

    it('Loads the images', done => {
      let component = $component('imageApp', {imageService });
      setTimeout(() => {
        assert.equal(component.image, images[0]);
        done();
      });
    });
  });
});