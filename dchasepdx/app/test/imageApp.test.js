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

    const albumService = {
      get() {
        return Promise.resolve();
      },
      add() {
        return Promise.resolve();
      }
    };

    let $component, component = null;
    beforeEach(angular.mock.inject($componentController => {
      $component = $componentController;
      component = $component('imageApp', {imageService, albumService});
    }));

    it('gets images from database', done => {
      setTimeout(() => {
        assert.deepEqual(component.img[0], imagesArray[0]);
        done();
      });
    });

    it('adds an image', done => {
      component.addImage(newImg);
      setTimeout(() => {
        assert.equal(imagesArray.length, 2);
        assert.deepEqual(imagesArray[1], newImg);
        done();
      });
    });
  });
});