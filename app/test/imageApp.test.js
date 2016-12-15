describe('imageApp component', () => {
  const {assert} = chai;

  beforeEach(
    angular.mock.module('components')
  );


  describe('create component', () => {
    const imagesArray = [
      {title: 'title', description: 'description', url: 'http://url.com'}
    ];

    const newImg = {title: 'new image', description: 'a new image', url: 'http://newurl.com'};

    const imageService = {
      get() {
        return Promise.resolve(imagesArray);
      },
      add() {
        return Promise.resolve(newImg);
      }
    };

    let $component, component = null;
    beforeEach(angular.mock.inject($componentController => {
      $component = $componentController;
      component = $component('imageApp', {imageService});
    }));

    it('gets images from database', done => {
      setTimeout(() => {
        assert.deepEqual(component.img[0], imagesArray[0]);
        done();
      });
    });

    it('adds an image', done => {
      component.add(newImg);
      setTimeout(() => {
        assert.equal(imagesArray.length, 2);
        assert.deepEqual(imagesArray[1], newImg);
        done();
      });
    });
  });
});