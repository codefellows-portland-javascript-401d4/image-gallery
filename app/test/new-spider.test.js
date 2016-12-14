/* globals angular, chai */

const {assert} = chai;

describe('component', () => {

  // angular mock WILL NOT WORK with before,
  // unless we tell it that we are using sharedInjector
  angular.mock.inject.sharedInjector();
  before(angular.mock.module('components'));

  // this is the component 'factory',
  // usable via:
  // const component = $component(name, locals, bindings);
  let newSpider = null;

  let addedSpider = null;

  const inject = angular.mock.inject(function($componentController) {
    newSpider = $componentController(
      'newSpider', // name of component
      null,        // locals ==> Dependencies to Inject (key: value)
      { add(s) { addedSpider = s; } }  // bindings (key: value)
    );
  });

  before(inject);

  function testEmpty() {
    assert.equal(newSpider.name, '');
    assert.equal(newSpider.type, '');
  }

  it('defaults to empty strings on prop', testEmpty);

  it('calls the add function with property data', () => {
    const name = 'Igor';
    const type = 'dapper';
    newSpider.name = name;
    newSpider.type = type;
    newSpider.addNew();
    assert.deepEqual(addedSpider, {name, type});
  });

  it('resets the properties after add', testEmpty);

});
