
describe( 'albums component', () => {
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

    describe('create component', () => {

        const albums = [
            {
                name: 'Big Bunnies',
                featured: 'http://www.fakepictureurl.com'
            },
            {
                name: 'Red Bunnies',
                featured: 'http://www.fakepictureurl2.com'
            }
        ];

        const album = {
            name: 'Tiny Bunnies',
            featured: 'http://www.fakepictureurl3.com'
        };

        const _id = 12345;
        
        const albumService = {
            get() {
                return Promise.resolve(albums);
            },
            add(newAlbum) {
                newAlbum._id = _id;
                return Promise.resolve(newAlbum);
            },
            remove(albumId) {
                assert.equal(albumId, _id);
                return Promise.resolve(albumId);
            }
        };

        const $state = {};

        const $scope = {};

        let component = null;
        
        before(() => {
            component = $component('albums', { albumService, $state, $scope });
        });


        it('loads albums', done => {

            setTimeout(() => {
                assert.equal(component.albums, albums);
                done();
            });
        });


        it('adds an album', done => {

            component.name = 'Tiny Bunnies';
            component.featured =  'http://www.fakepictureurl3.com';

            component.addAlbum();

            setTimeout(() => {
                album._id = _id;
                assert.equal(albums.length, 3);
                assert.deepEqual(albums[2], album);           
                done();
            });
        });

        it('removes an album', done => {

            const event = {};

            event.stopPropagation = () => ''; 

            component.deleteAlbum(component.albums[2], event);

            setTimeout(() => {
                assert.equal(albums.length, 2);
                assert.notInclude(albums, album);
                done();
            });
        });

    });

});

