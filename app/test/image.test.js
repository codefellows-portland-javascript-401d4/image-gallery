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
         description: 'smallbunny' },
    ];

    // const image = {
    //   url: 'http://4.bp.blogspot.com/-HTvSYzA-pO4/UgQb4Zh_u0I/AAAAAAAAEuI/XwhtogT_1tA/s1600/3+cute2.jpg',
    //   title: 'Little bunny',
    //   description: 'Young little bunny in the grass'
    // };

    const imageService = {
      get() {
        return Promise.resolve(images);
      },
      add(image) {
        return Promise.resolve(image);
      },
      remove(image) {
        return Promise.resolve(image);
      }
    };

    it('Loads the images', done => {
        const component = $component('images', { imageService });

        assert.isOk(component.loading);
        
        setTimeout(() => {
        assert.equal(component.images, images);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('A new image is added', done => {
      let component = $component('images', { imageService });

      component.add(testingImage);

      setTimeout(() => {
        assert.equal(images.length, 3);
        assert.equal(images[2], testingImage);
        done();
      });
    });

    it('An image is removed', done => {
      let component = $component('images', { imageService });

      component.remove(testingImage);

      setTimeout(() => {
        assert.equal(images.length, 2);
        assert.equal(images.indexOf(testingImage), -1);
        done();
      });
    });
  });

  //Child component tests
    describe('delete image in large view', () => {
      let largeImage = null;
      let deletedImage = null;

      it('deletes image in large view', done => {
        largeImage = $component('imageLarge', null, {
          remove(image) { deletedImage = image; }
        });

        largeImage.remove(testingImage);
        assert.deepEqual(deletedImage, testingImage);
        done();
      });    
    });

    // describe('new image is added in child component', () => {
    //   let newImage = null;
    //   let uploadedImage = null;

    //   it('adding a new image', done => {
    //     newImage = $component('imageNew', null, {
    //       add(image) { uploadedImage = image; }
    //     });

    //     newImage.url = testingImage.url;
    //     newImage.title = testingImage.title;
    //     newImage.description = testingImage.description;

    //     newImage.addNew(testingImage);
    //     assert.deepEqual(uploadedImage, testingImage);
    //     done();
    //   });
    // });
});