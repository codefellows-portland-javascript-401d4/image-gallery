describe('Image gallery component', () => {
  const {assert} = chai;

  beforeEacb(
    angular.mock.module('components')
  );

  let $component = null;

  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('Create component', () => {
    const images = [
      { image_title: 'image3', url: 'imageurl.com', image_description: 'tiny little bunny' }
    ];

    const imageService = {
      get() {
        return Promise.resolve(images);
      }
    };

    it('Loads the images', done => {
      let component = $component('imageApp', {imageService });
      setTimeout(() => {
        assert.equal(component.img, images[0]);
        done();
      });
    });
  });
});