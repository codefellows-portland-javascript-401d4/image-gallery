describe( 'new-album component', () => {

  const { assert } = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let newAlbum = null;

  let addedAlbum = null;

  const inject = angular.mock.inject(function($componentController) {
    newAlbum = $componentController(
            'newAlbum',
            null,
            { add(a) { addedAlbum = a; } }
        );
  });

  before(inject);

  function testEmpty() {
    assert.equal(newAlbum.name, '');
  }

  it('defaults to empty strings on prop', testEmpty);

  it('calls the add function with property data', () => {
    const name = 'Test Album';
    newAlbum.name = name;
    newAlbum.addNew();
    assert.deepEqual(addedAlbum, { name });
  });

  it('resets the properties after add', testEmpty);

});
