
describe( 'album-contents component', () => {
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

        const image = {
            title: 'Really Super Tiny Bunny',
            url: 'http://www.fakepictureurl3.com',
            description: 'A picture of a really super tiny bunny'
        };

        const _id = 56789;

        const album = {};

        album.images = [
            {
                title: 'Tiny Bunny',
                url: 'http://www.fakepictureurl1.com',
                description: 'A picure of a tiny bunny',
                album: 12345
            },
            {
                title: 'Really Tiny Bunny',
                url: 'http://www.fakepictureurl2.com',
                description: 'A picture of a really tiny bunny',
                album: 12345
            }
        ];
        
        const albumService = {
            get() {
                return Promise.resolve(album);
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
                return Promise.resolve(imageId);
            }          
        };

        let component = null;
        
        before(() => {
            component = $component('albumContents', { albumService, imageService });
        });

        it('loads albums', done => {

            component.$onInit();

            setTimeout(() => {
                assert.equal(component.album, album);
                done();
            });
        });

        it('adds an image', done => {

            component.title = 'Really Super Tiny Bunny';
            component.url =  'http://www.fakepictureurl3.com';
            component.description = 'A picture of a really super tiny bunny';   
            component.album._id = 12345;

            component.addImage();

            setTimeout(() => {
                image._id = _id;
                image.album = album._id;
                assert.equal(album.images.length, 3);
                assert.deepEqual(album.images[2], image);           
                done();
            });
        });

        it('removes an image', done => {

            component.removeImage(component.album.images[2]);

            setTimeout(() => {
                assert.equal(album.images.length, 2);
                assert.notInclude(album.images, image);
                done();
            });
        });


    });

});

