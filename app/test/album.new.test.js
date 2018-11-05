describe( 'album-new component', () => {

  const { assert } = chai;

  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));

  let newAlbum = null;

  let addedAlbum = null;

  const inject = angular.mock.inject(function($componentController) {
    newAlbum = $componentController(
            'albumNew',
            null,
            { add(a) { addedAlbum = a; } }
        );
  });

  before(inject);

  function testEmpty() {
    assert.equal(newAlbum.name, '');
  }

  it('calls the add function', () => {
    const name = 'Test Album';
    newAlbum.name = name;
    newAlbum.addNew();
    assert.deepEqual(addedAlbum, { name });
  });

});