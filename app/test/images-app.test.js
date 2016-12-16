describe('image component test', () => {

    const {assert} = chai;

    beforeEach(
        angular.mock.module('components')
    );

    let $component = null;

    beforeEach(angular.mock.inject($componentController => {
        $component = $componentController;
    }));

    describe('create component', () => {
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

        const albums = [{name:'animals', images: []}, {name:'anime', images:[]}];

        const albumService = {
            getAll() {
                return Promise.resolve(albums);
            },
            getAlbum(album) {
                return Promise.resolve(albums[0]);
            },
            remove(id) {
                return Promise.resolve();
            },
            add(album) {
                return Promise.resolve(album);
            }
        };

        it('loads images', done => {
            const component = $component('imageApp', {imageService, albumService});
            assert.isOk(component.loading);

            setTimeout(() => {
                assert.equal(component.images, images);
                assert.isNotOk(component.loading);
                done();
            });
        });

        it('loads albums', done => {
            const component = $component('imageApp', {imageService, albumService});
            assert.isOk(component.loading);

            setTimeout(() => {
                assert.equal(component.albums, albums);
                assert.isNotOk(component.loading);
                done();
            });

            done();
        });

        it('add new image', done => {
            const component = $component('imageApp', {imageService, albumService});
            component.add(image);

            setTimeout(() => {
                assert.equal(component.images.length, 3);
                assert.deepEqual(component.images[2], image);
                done();
            });
        });

        it('deletes an image', done => {
            const component = $component('imageApp', {imageService, albumService});
            assert.isOk(component.loading);
            component.remove(image);

            setTimeout(() => {
                assert.equal(component.images.length, 2);
                done();
            });
        });
    });
});