import template from './add.html';


export default {
	template,
	bindings: {
		add: '<'
	},
	controller,
	controllerAs: 'addImage'   
};

controller.$inject = ['imageService', 'albumService'];

function controller(images, albums) {

	    // call the get to load all images
	images.get().then(images => {
		this.loading = false;
		this.images = images;
	});

    // call the get to load all images
	albums.get().then(albums => {
		this.loading = false;
		this.albums = albums;
	});

}