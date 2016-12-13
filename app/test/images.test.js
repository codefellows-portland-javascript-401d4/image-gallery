
describe('images component', () => {
    const { assert } = chai;

    // mock the components module
    // to use before, instead of beforeEach, this is required:
    angular.mock.module.sharedInjector();

    before( 
        angular.mock.module('components')
    );
    
    let $component = null;
    before(
        angular.mock.inject($componentController => {
            $component = $componentController;
        })
    );

    describe('create component', () => {

        const images = [
            {title: 'testImage', description: 'a test image', url: 'fake URL'},
            {title: 'testImageToo', description: 'another test image', url: 'fake URL too'}
        ];

        const image = {title: 'testImg', description: 'the test image', url: 'a fake URL'};
        
        const imageService = {
            get() {
                return Promise.resolve(images);
            },
            add(image) {
                return Promise.resolve(image);
            }
        };


        it('loads images', done => {
            let component = $component('imageChoice', {imageService});

            setTimeout(() => {
                assert.equal(component.images, images);
                done();
            });
        });


        it('add an image', done => {
            let component = $component('imageChoice', {imageService});

            component.add(image);

            setTimeout(() => {
                assert.equal(images.length, 3);
                assert.equal(images[2], image);
                done();
            });
        });

    });

});