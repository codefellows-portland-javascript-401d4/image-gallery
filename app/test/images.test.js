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
            remove(id) {
                return Promise.resolve();
            }
        };

        it('loads images', done => {
            const component = $component('imageApp', {imageService});
            assert.isOk(component.loading);

            setTimeout(() => {
                assert.equal(component.images, images);
                assert.isNotOk(component.loading);
                done();
            });
        });

        it('add new image', done => {
            const component = $component('imageApp', {imageService});
            component.add(image);

            setTimeout(() => {
                assert.equal(component.images.length, 3);
                assert.deepEqual(component.images[2], image);
                done();
            });
        });

        it('deletes an image', done => {
            const component = $component('imageApp', {imageService});
            assert.isOk(component.loading);
            component.remove(image);

            setTimeout(() => {
                assert.equal(component.images.length, 2);
                done();
            });
        });
    });
});