describe('Image gallery component', () => {
  const { assert } = chai;

  angular.mock.module.sharedInjector();  

  before(angular.mock.module('components'));

  let $component = null;

  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  const testingImage = {
    url: 'testingimageurl.com',
    title: 'testingImage93',
    description: 'testdescription'
  };

  describe('Create component', () => {

    const images = [
      { url: 'imageurl.com',
        title: 'image3',
        description: 'tinylittlebunny' },
       { url: 'image2url.com',
         title: 'image8',
         description: 'smallbunny' }
    ];

    const image = {
      url: 'http://4.bp.blogspot.com/-HTvSYzA-pO4/UgQb4Zh_u0I/AAAAAAAAEuI/XwhtogT_1tA/s1600/3+cute2.jpg',
      title: 'Little bunny',
      description: 'Young little bunny in the grass'
    };

    const imageService = {
      get() {
        return Promise.resolve(image);
      },
      add(image) {
        return Promise.resolve(image);
      },
      remove(image) {
        return Promise.resolve(image);
      }
    };

    // console.log($component);

    // let component = null;
    // before(() => {
    //  component = $component('imageApp', {imageService});
    // });

    it('Loads the images', done => {
        let component = $component('imageApp', { imageService });

      // assert.isOk(component.loading);
      setTimeout(() => {
        assert.equal(component.image, image);
        // assert.isNotOk(component.loading);
        done();
      });
    });
  });
});