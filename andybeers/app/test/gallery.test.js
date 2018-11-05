describe('Gallery component', () => {

  const { assert } = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;

  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('Create component', () => {

    const images = [
      { title: 'test1', description: 'just testing', url: 'www.image.com' }
    ];

    const imageService = {
      get() {
        return Promise.resolve(images);
      }
    };


    it('Loads images', done => {
      let component = $component('galleryApp', { imageService });
      setTimeout(() => {
        assert.equal(component.img, images[0]);
        done();
      });
    });

  });


});