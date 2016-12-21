describe('image-app component', () => {
    const {assert} = chai;

    angular.mock.module.sharedInjector();

    before(
        angular.mock.module('components')
    );

    let $component = null;

    before(angular.mock.inject($componentController => {
        $component = $componentController;
    }));

    describe('create component', () => {

        const images = [
            {title: 'test1', url:'http://placehold.it/350x150', description:' Its a test'},
            {title: 'test2', url:'http://placehold.it/500x500', description: 'It is also a test'}
        ];

        const imageService = {
            get() {
                return Promise.resolve(images);
            }
        };

        const $state = {};

        let component = null;
        before(() => {
            component = $component('images', {imageService, $state});
        });
    });
});

