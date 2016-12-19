const { assert } = chai;

describe('image-new component', () => {
  angular.mock.inject.sharedInjector();
  before(angular.mock.module('components'));

  let imageNew = null;
  let addedImage = null;

  const inject = angular.mock.inject(function($componentController) {
    imageNew = $componentController(
      'imageNew',
      null,
      { add(i) { addedImage = i; } }
    );
  });

  before(inject);

  function testEmpty() {
    assert.equal(imageNew.title, '');
    assert.equal(imageNew.description, '');
    assert.equal(imageNew.url, '');
  }

  it('defaults to empty strings', testEmpty);

  it('calls addNew function with data', () => {
    const title = 'Test image';
    const description = 'Test image description';
    const url = 'http://i.imgur.com/9oGI5Tz.jpg';

    imageNew.title = title;
    imageNew.description = description;
    imageNew.url = url;
    imageNew.addNew();
    assert.deepEqual(addedImage, { title, description, url });
  });

  it('resets properties after addNew', testEmpty);

});
