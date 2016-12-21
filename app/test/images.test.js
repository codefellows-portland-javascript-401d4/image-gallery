/*globals angular, chai*/

describe('components', () => {
  const {assert} = chai;

  beforeEach(angular.mock.module('components'));

  let $component = null;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('images component', () => {
    const images = [
      {title: 'cat', description: 'a cat', url: 'http://www.cat.com'},
      {title: 'dog', description: 'a dog', url: 'http://www.dog.com'}
    ];

    const image = {title: 'bird', description: 'a bird', url: 'http://www.bird.com'};

    const imageService = {
      getAll() {
        return Promise.resolve(images);
      },
      addImage(image) {
        return Promise.resolve(image);
      },
      remove(image) {
        return Promise.resolve(image);
      }
    };

    it('loads images', done => {
      const component = $component('images', {imageService}, {images});
      setTimeout(() => {
        assert.equal(component.images, images);
        done();
      });
    });

    it('adds an image', done => {
      const component = $component('images', {imageService}, {images});
      component.addImage(image);
      setTimeout(() => {
        assert.equal(component.images.length, 3);
        assert.equal(component.images[2], image);
        done();
      });
    });

    it('removes an image', done => {
      const component = $component('images', {imageService}, {images});
      component.removeImage(image);
      setTimeout(() => {
        assert.equal(component.images.length, 2);
        done();
      });
    });
  });

  describe('deleteImage component', () => {
    let image = [1,2,3];
    let removeImage = function(arr) {
      arr.pop();
      return arr;
    };

    it('calls the delete function', done => {
      const component = $component('deleteImage', null, {image: image, removeImage: removeImage});
      component.delete();
      setTimeout(() => {
        assert.equal(image.length, 2);
        done();
      });
    });
  });

  describe('newImage component', () => {
    it('calls reset function', done => {
      const component = $component('newImage');
      component.title = 'person';
      component.reset();
      setTimeout(() => {
        assert.equal(component.title, '');
        done();
      });
    });

    let imageObj;

    function addImage(obj) {
      imageObj = obj;
    }

    it('calls add function', done => {
      const title = 'person';
      const description = 'a person';
      const url = 'http://www.person.com';
      const component = $component('newImage', null, {addImage: addImage});
      component.title = title;
      component.description = description;
      component.url = url;
      component.add();
      setTimeout(() => {
        assert.equal(title, imageObj.title);
        assert.equal(description, imageObj.description);
        assert.equal(url, imageObj.url);
        done();
      });
    });
  });
});

