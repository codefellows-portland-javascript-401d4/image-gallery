describe('images component', () => {
    
    const assert = chai.assert;

    angular.mock.module.sharedInjector();

    before(angular.mock.module('components'));

    let $component = null;

    before(angular.mock.inject($componentController => {
        $component = $componentController;
    }));

    describe('create component', () => {

        const images = [
            {
                title: 'monkey',
                description: 'A cute widdow monkey',
                url: 'http://www.furrytalk.com/wp-content/uploads/2010/01/6.jpg'
            },
            {
                title: 'musk ox',
                description: 'A precious baby musk ox',
                url: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr01/2013/1/30/15/enhanced-buzz-10140-1359576923-0.jpg'
            }
        ];

        const image = {
            title: 'elephant',
            description: 'A baby elephant, baby',
            url: 'http://images.nationalgeographic.com/wpf/media-live/photos/000/002/cache/baby-asian-elephant_227_600x450.jpg'
        };

        const _id = 123456789;

        const imageService = {
            get() {
                return Promise.resolve(images);
            },
            add(image) {
                image._id = _id;
                return Promise.resolve(image);
            },
            remove(imageId) {
                assert.equal(imageId, _id);
                return Promise.resolve(true);
            }
        };

        let component = null;

        before(() => {
            component = $component('imageApp', {imageService});
        });

        it('adds an image', done => {
            component.add(image);
            setTimeout(() => {
                assert.equal(images.length, 3);
                assert.equal(images[2], image);
                done();
            });
        });

        it('removes an image', done => {
            component.remove(image);

            setTimeout(() => {
                assert.equal(images.length, 2);
                assert.notInclude(images, image);
                done();
            });
        });
    });
});