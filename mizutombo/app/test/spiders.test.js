describe('spiders component', () => {
  const {assert} = chai;

  angular.mock.module.sharedInjector();
  // we need to mock the components module,
  // which is where spiders component lives
  before(
    angular.mock.module('components')
  );

  let $component = null;
  before(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe('create component', () => {

    const spiders = [
      {name: 'Igor', type: 'dapper'},
      {name: 'Spike', type: 'punk'}
    ];

    const spider = {name: 'Goblin', type: 'greeny'};

    const spiderService = {
      get() {
        return Promise.resolve(spiders);
      },
      add(spider) {
        return Promise.resolve(spider);
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

    it('add a spider', done => {

      component.add(spider);

      setTimeout(() => {
        assert.equal(spiders.length, 3);
        assert.equal(spiders[2], spider);
        done();
      });
    });
  });
});
