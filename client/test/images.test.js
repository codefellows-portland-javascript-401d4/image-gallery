
describe( 'images component', () => {
    const { assert } = chai;

    // we need to mock the components module, that's where
    // images component lives
    beforeEach( 
        angular.mock.module('components')
    );
    
    let $component = null;
    beforeEach(angular.mock.inject($componentController => {
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
        
        const imageService = {
            get() {
                return Promise.resolve(images);
            },
            add(image) {
                return Promise.resolve(image);
            }
        };


        it( 'loads images', done => {

            const component = $component('imageApp', { imageService });

            setTimeout(() => {
                assert.equal(component.images, images);
                done();
            });
        });


        // it( 'adds an image', done => {

        //     const component = $component('images', { imageService });

        //     component.add(image);

        //     setTimeout(() => {
        //         assert.equal(images.length, 3);
        //         assert.equal(images[2], image);
        //         done();
        //     });
        // });

    });

});

