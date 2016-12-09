
describe( 'pirates component', () => {
    const { assert } = chai;

    // to use before, instead of beforeEach, this is required:
    angular.mock.module.sharedInjector();
    before(angular.mock.module('components'));
    
    let $component = null;
    before(angular.mock.inject($componentController => {
        $component = $componentController;
    }));

    describe('create component', () => {

        const pirates = [
            { name: 'luffy', rank: 'captain' },
            { name: 'nami', rank: 'navigator' }
        ];

        const pirate = { name: 'zoro', rank: 'swordsman' };
        
        const pirateService = {
            get() {
                return Promise.resolve(pirates);
            },
            add(pirate) {
                return Promise.resolve(pirate);
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

    });

});