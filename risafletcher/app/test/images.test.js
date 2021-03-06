describe('images component', () => {
  const {assert} = chai;

  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('creates a component', () => {
    const images = [
      {
        name: 'Professor Cat',
        src:'https://pbs.twimg.com/profile_images/447460759329460224/mt2UmwGG_400x400.jpeg',
        description: 'Doctor of Philosophy, Physics'
      },
      {
        name: 'Professor Cat',
        src:'https://pbs.twimg.com/profile_images/447460759329460224/mt2UmwGG_400x400.jpeg',
        description: 'Doctor of Philosophy, Physics'
      }
    ];
    const image = {
      name: 'Professor Cat',
      src:'https://pbs.twimg.com/profile_images/447460759329460224/mt2UmwGG_400x400.jpeg',
      description: 'Doctor of Philosophy, Physics'
    };

    const imageService = {
      get() {
        return Promise.resolve(images); //eslint-disable-line
      },
      add(image) {
        return Promise.resolve(image); //eslint-disable-line
      },
      remove(image) {
        return Promise.resolve(image); //eslint-disable-line
      }
    };

    it('adds an image', done => {
      const component = $component('addImg', {imageService});
      component.album = {
        name: 'test',
        _id: '123',
        images: images
      };
      component.addNew(image);
      setTimeout(() => {
        assert.equal(images.length, 2);
        assert.deepEqual(images[1], image);
        done();
      });
    });

    it('deletes an image from thumbnailApp page', done => {
      const component = $component('thumbnailApp', {imageService});
      component.album = {
        images: images
      };
      component.remove(image);
      setTimeout(() => {
        assert.equal(images.length, 2);
        assert.deepEqual(images[1], image);
        done();
      });
    });

    it('deletes an image from title_img_desc page', done => {
      const component = $component('titleImgDesc', {imageService});
      component.album = {
        images: images
      };
      component.remove(image);
      setTimeout(() => {
        assert.equal(images.length, 2);
        assert.deepEqual(images[1], image);
        done();
      });
    });

    it('deletes an image from title_link_desc page', done => {
      const component = $component('titleLinkDesc', {imageService});
      component.album = {
        images: images
      };
      component.remove(image);
      setTimeout(() => {
        assert.equal(images.length, 2);
        assert.deepEqual(images[1], image);
        done();
      });
    });
  });
});