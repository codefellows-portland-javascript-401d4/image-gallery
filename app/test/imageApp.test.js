describe('imageApp component', () => {
  const {assert} = chai;

  beforeEach(
    angular.mock.module('components')
  );


  describe('create component', () => {
    const imagesArray = [
      {title: 'title', description: 'description', url: 'http://url.com'}
    ];

    const imageService = {
      get() {
        return Promise.resolve(imagesArray);
      }
    };

    let $component, component = null;
    beforeEach(angular.mock.inject($componentController => {
      $component = $componentController;
      component = $component('imageApp', {imageService});
    }));

    it('gets images from database', done => {
      setTimeout(() => {
        assert.deepEqual(component.img, imagesArray[0]);
        done();
      });
    });
  });
});