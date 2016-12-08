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

    });
});