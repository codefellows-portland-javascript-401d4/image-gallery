describe ( 'images component', () => {
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

    // use a suite to create one component, and then run a series
    // of tests, in order, against that component
	describe('create component', () => {

		const images = [
            { title: 'a', url: 'a.com', description: 'aa' , albumId: 'aaa'},
            {title: 'b', url: 'b.com', description: 'bb', albumId: 'bbb' }
		];

		const image = {title: 'c', url: 'c.com', description: 'cc', albumId: 'ccc'};
		// const badImage = {title: 'd', description: 'dd'};

		const _id = 123;
        
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
			component = $component('images', { imageService });
		});

		it( 'loads images', done => {
			assert.isOk(component.loading);

			setTimeout(() => {
				assert.equal(component.images, images);
				assert.isNotOk(component.loading);
				done();
			});
		});


		it( 'add an image', done => {

			component.add(image);

			setTimeout(() => {
				assert.equal(images.length, 3);
				assert.equal(images[2], image);
				done();
			});
		});

		it('removes image', done => {
			component.remove(image);

			setTimeout(() => {
				assert.equal(images.length, 2);
				assert.notInclude(images, image);
				done();
			});
		});
		// it('requires image url', done => {
		// 	component.add(badImage);

		// 	setTimeout(() => {
		// 		assert.equal(images.length, 2);
		// 		assert.notInclude(images, image);
		// 		done();
		// 	});
		// });
	});

});

