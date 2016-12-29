// From 12/13 class-Tim's question
/* globals angular, chai */

const { assert } = chai;

describe( 'new image component', () => {

    // angular mock WILL NOT WORK with before,
    // unless we tell it we are using sharedInjector
  angular.mock.module.sharedInjector();

  before(angular.mock.module('components'));
    
    // this is the component "factory",
    // usable via:
    // const component = $component(name, locals, bindings); 
  let newImage = null;

  let addedImage = null;
    
  const inject = angular.mock.inject(function($componentController) {
    newImage = $componentController(
            'newImage', // name of component
            null,        // locals -> Dependencies to Inject (key: value)
            { add(i) { addedImage = i; } }      // bindings (key:value)
        );
  });

  before(inject);

  function testEmpty() {
    assert.equal(newImage.title, '');
    assert.equal(newImage.url, '');
    assert.equal(newImage.desc, '');
  }

  it('defaults to empty strings on loading', testEmpty);

  it('calls the add function with property data', () => {
    const title = 'Bugs';
    const url = 'www.test';
    const desc = 'Rascally Rabbit';

    newImage.title = title;
    newImage.url = url;
    newImage.desc = desc;
    newImage.addNew();
    assert.deepEqual(addedImage, { title, url, desc });
  });

  it('resets to empty strings after add', testEmpty);

});