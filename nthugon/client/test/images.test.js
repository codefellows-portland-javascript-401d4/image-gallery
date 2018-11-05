
describe( 'images component', () => {
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

        const images = [
            {
                title: 'Big Bunny',
                url: 'http://www.fakepictureurl.com',
                description: 'Here is a picure of a really big bunny.'
            },
            {
                title: 'Small Bunny',
                url: 'http://www.fakepictureurl2.com',
                description: 'Here is a picure of a really small bunny.'
            }
        ];

        const image = {
            title: 'Medium Bunny',
            url: 'http://www.fakepictureurl3.com',
            description: 'Here is a picure of a medium sized bunny.'
        };

        const _id = 12345;
        
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
            component = $component('imageApp', { imageService });
        });


        it('loads images', done => {

            setTimeout(() => {
                assert.equal(component.images, images);
                done();
            });
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

