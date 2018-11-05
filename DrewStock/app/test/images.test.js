
describe('images component', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let $component = null;

  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {

    const images = [
      {url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Bunny_in_zoo_cropped.jpg', imageTitle: 'Fluffy the bunny', imageDescription: 'This is a close up photo of a little bunny.'}
    ];

    const image = {url: 'http://www.publicdomainpictures.net/pictures/90000/velka/cute-bunny-rabbit.jpg', imageTitle: 'Funny hair bunny', imageDescription: 'This is a bunny with funny hair'};

    const imageService = {
      get() {
        return Promise.resolve(images);
      },
      add(image) {
        return Promise.resolve(image);
      }
    };

    let component = null;

    before(() => {
      component = $component('images', {imageService});
    });

    it('loads images', done => {

      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.images, images);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('add an image', done => {

      component.add(image);

      setTimeout(() => {
        assert.equal(images.length, 2);
        assert.equal(images[1], image);
        done();
      });
    });


  });

});
