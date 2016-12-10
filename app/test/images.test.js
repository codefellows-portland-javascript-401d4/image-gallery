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
      add(image) {
        return Promise.resolve(image);
      },
      remove(image) {
        return Promise.resolve(image);
      }
    };

    it('loads images', done => {
      const component = $component('images', {imageService});
      setTimeout(() => {
        assert.equal(component.imageArr, images);
        done();
      });
    });

    it('adds an image', done => {
      const component = $component('images', {imageService});
      component.addImage(image);
      setTimeout(() => {
        assert.equal(images.length, 3);
        assert.equal(images[2], image);
        done();
      });
    });

    it('removes an image', done => {
      const component = $component('images', {imageService});
      component.removeImage(image);
      setTimeout(() => {
        assert.equal(images.length, 2);
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

    function addImage(title, description, url) {
      this.title = title;
      this. description = description;
      this.url = url;
    }

    it('calls add function', done => {
      const component = $component('newImage', null, {addImage: addImage});
      component.title = 'person';
      component.description = 'a person';
      component.url = 'http://www.person.com';
      component.add();
      setTimeout(() => {
        assert.equal(component.title, '');
        assert.equal(component.description, '');
        assert.equal(component.url, '');
        done();
      });
    });
  });
});

