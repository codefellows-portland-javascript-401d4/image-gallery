/* globals angular chai*/
describe ( 'albums component', () => {
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

		const albums = [
            { title: 'a', description: 'aa'},
            {title: 'b', description: 'bb'}
		];

		const album = {title: 'c', description: 'cc'};
		// const badalbum = {title: 'd', description: 'dd'};

		const _id = 123;
        
		const albumService = {
			get() {
				return Promise.resolve(albums);
			},
			add(album) {
				album._id = _id;
				return Promise.resolve(album);
			},
			remove(albumId) {
				assert.equal(albumId, _id);
				return Promise.resolve(true);
			}
		};
		let component = null;
		before(() => {
			component = $component('albums', { albumService });
		});

		it( 'loads albums', done => {
			assert.isOk(component.loading);

			setTimeout(() => {
				assert.equal(component.albums, albums);
				assert.isNotOk(component.loading);
				done();
			});
		});


		it( 'add an album', done => {

			component.add(album);

			setTimeout(() => {
				assert.equal(albums.length, 3);
				assert.deepEqual(albums[2], album);
				done();
			});
		});

		it('removes album', done => {
			component.remove(album);

			setTimeout(() => {
				assert.equal(albums.length, 2);
				assert.notInclude(albums, album);
				done();
			});
		});
		// it('requires album url', done => {
		// 	component.add(badalbum);

		// 	setTimeout(() => {
		// 		assert.equal(albums.length, 2);
		// 		assert.notInclude(albums, album);
		// 		done();
		// 	});
		// });
	});

});

