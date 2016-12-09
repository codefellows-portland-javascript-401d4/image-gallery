
describe( 'pirates component', () => {
    const { assert } = chai;

    // to use before, instead of beforeEach, this is required:
    angular.mock.module.sharedInjector();

    // tell angular mock we want to use components module
    // notice we are using before, not beforeEach
    before(angular.mock.module('components'));
    
    // get a reference to the $componentController, which we
    // can then use to create component instances.
    // In this case, we only are creating in once, via before
    let $component = null;
    before(angular.mock.inject($componentController => {
        $component = $componentController;
    }));

    // use a suite to create one component, and then run a series
    // of tests, in order, against that component
    describe('create component', () => {

        const pirates = [
            { name: 'luffy', rank: 'captain' },
            { name: 'nami', rank: 'navigator' }
        ];

        const pirate = { name: 'zoro', rank: 'swordsman' };
        const _id = 123;
        
        const pirateService = {
            get() {
                return Promise.resolve(pirates);
            },
            add(pirate) {
                pirate._id = _id;
                return Promise.resolve(pirate);
            },
            remove(pirateId) {
                assert.equal(pirateId, _id);
                return Promise.resolve(true);
            }
        };

        let component = null;
        before(() => {
            component = $component('pirates', { pirateService });
        });

        it( 'loads pirates', done => {
            assert.isOk(component.loading);

            setTimeout(() => {
                assert.equal(component.pirates, pirates);
                assert.isNotOk(component.loading);
                done();
            });
        });


        it( 'add a pirates', done => {

            component.add(pirate);

            setTimeout(() => {
                assert.equal(pirates.length, 3);
                assert.equal(pirates[2], pirate);
                done();
            });
        });

        it('removes pirate', done => {
            component.remove(pirate);

            setTimeout(() => {
                assert.equal(pirates.length, 2);
                assert.notInclude(pirates, pirate);
                done();
            });
        });

    });

});