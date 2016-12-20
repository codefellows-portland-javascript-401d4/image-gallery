describe('Image gallery component', () => {
  const { assert } = chai;

  angular.mock.module.sharedInjector();  

  beforeEach(angular.mock.module('components'));

  let $component = null;

  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('Create component', () => {

    const images = [
      { url: 'imageurl.com',
        image_title: 'image3',
        image_description: 'tinylittlebunny' },
       { url: 'image2url.com',
         image_title: 'image8',
         image_description: 'smallbunny' }
    ];

    // const image = {
    //    url: 'image5url.com',
    //    image_title: 'image5',
    //    image_description: 'littlebunny' };

    // const imageService = {
    //   get() {
    //     return Promise.resolve(images);
    //   },
    // };

    // console.log($component);

    // let component = null;
    // before(() => {
    //  component = $component('images', {imageService});
    // });

    // it('Loads the images', done => {

    //   assert.isOk(component.loading);

    //   // let component = $component('imageApp', {imageService });
    //   setTimeout(() => {
    //     assert.equal(component.images, images);
    //     assert.isNotOk(component.loading);
    //     done();
    //   });
    // });
  });
});