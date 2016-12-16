/* globals angular, chai */

const {assert} = chai;

describe('component', () => {

  // to use before, instead of beforeEach, this code is required ...
  angular.mock.module.sharedInjector();

  // tell angular mock that we want to use components module
  // Note: using before instead of beforeEach
  before(angular.mock.module('components'));

  // get a reference to the $componentController, which
  // we can then use to create component instances.
  // In this case, we are creating it only once, via before ...
  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  // use a suite to create one component, then run a series
  // of tests, in order, against that component ...
  describe('create component', () => {

    const spiders = [
      { name: 'Igor', type: 'dapper' },
      { name: 'Spike', type: 'punk' }
    ];

    const spider = { name: 'Goblin', type: 'greeny'};
    const _id = 123;

    const spiderService = {
      get() {
        return Promise.resolve(spiders);
      },
      add(pirate) {
        pirate._id = _id;
        return Promise.resolve(spider);
      },
      remove(pirateId) {
        assert.equal(pirateId, _id);
        return Promise.resolve(true);
      }
    };

    let component = null;
    before(() => {
      component = $component('spiders', {spiderService});
    });

    it('loads spiders', done => {
      assert.isOk(component.loading);

      setTimeout(() => {
        assert.equal(component.spiders, spiders);
        assert.isNotOk(component.loading);
        done();
      });
    });

    it('adds a spider', done => {

      component.add(spider);

      setTimeout(() => {
        assert.equal(spiders.length, 3);
        assert.equal(spiders[2], spider);
        done();
      });
    });

    it('removes spider', done => {
      component.remove(spider);

      setTimeout(() => {
        assert.equal(spiders.length, 2);
        assert.notInclude(spiders, spider);
        done();
      });
    });
  });
});
