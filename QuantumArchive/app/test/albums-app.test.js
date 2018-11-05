describe('album component test', () => {

    const {assert} = chai;
    
    beforeEach(
        angular.mock.module('components')
    );

    // TODO: figure out how to test $state
    let $component = null, $state = {go: () => {return true;}};

    beforeEach(angular.mock.inject(($componentController) => {
        $component = $componentController;
    }));

    describe('create component', () => {
        const albums = [
            {name: 'animals', images: []},
            {name: 'anime', images: []}
        ];

        const album = {name: 'games', images: []};

        const albumService = {
            getAll() {
                return Promise.resolve(albums);
            },
            getAlbum(album) {
                return Promise.resolve(album);
            },
            remove(id) {
                return Promise.resolve();
            },
            add(album) {
                return Promise.resolve(album);
            }
        };

        const images = [
            {title: 'sloths', description: 'sloths be chillin', url: 'http://sloths.com'},
            {title: 'gnarwhals', description: 'gnarwhals gnarwhals swimmin in the ocean', url: 'http://gnarwhals.com'}
        ];

        const image = {title: 'snakes', description: 'snakes on a plane', url: 'http://snakesonplane.com'};

        const imageService = {
            get() {
                return Promise.resolve(images);
            },
            add(image) {
                return Promise.resolve(image);
            },
            remove(id) { // eslint-disable-line no-unused-vars
                return Promise.resolve();
            }
        };

        it('loads albums', done => {
            const component = $component('albumApp', {imageService, albumService, $state});
            assert.isOk(component.loading);

            setTimeout(() => {
                assert.equal(component.albums, albums);
                assert.isNotOk(component.loading);
                done();
            });
        });

        it('adds albums', done => {
            const component = $component('albumApp', {imageService, albumService, $state});
            component.addAlbum(album);

            setTimeout(() => {
                assert.equal(component.albums.length, 3);
                assert.deepEqual(component.albums[2], album);
                done();
            });
        });
    });
});