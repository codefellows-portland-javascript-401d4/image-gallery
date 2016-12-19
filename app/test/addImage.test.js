const {assert} = chai;

describe('component', () => {
  angular.mock.module.sharedInjector();
  before(angular.mock.module('components'));

  let addImage = null;
  let newImg = null;

  const inject = angular.mock.inject(function($componentController) {
    addImage = $componentController(
      'addImage',
      null,
      {addImage(i) {newImg = i;}}
    );
  });
  before(inject);

  it('calls the add function with property data', () => {
    const title = 'title';
    const description = 'description';
    const url = 'http://url.com';
    const album = {_id: '123id'};
    addImage.title = title;
    addImage.description = description;
    addImage.url = url;
    addImage.album = album;
    addImage.addNew();
    console.log(newImg);
    assert.deepEqual(newImg, {title, description, url, album:album._id});
  });
});
