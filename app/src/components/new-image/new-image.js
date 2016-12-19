import template from './new-image.html';

export default {
	template,
	bindings: {
		add: '<',
		images: '<',
		albums: '<'
	},
	controller,
	controllerAs: 'newImage'  
};

controller.$inject = ['imageService', 'albumService'];

function controller(images, albums) {

	this.reset = () => {
		this.title = '';
		this.url = '';
		this.description ='';
		this.albumId='';
		this.albumTitle='';
		this.albumDescription='';
	};
	this.reset();

	this.addNewAlbum = () => {
		albums.add({
			title: this.albumTitle,
			description: this.albumDescription,
		});
		this.reset();
	};

	this.addNewImage = () => {
		images.add({
			title: this.title,
			url: this.url,
			description: this.description,
			albumId: this.album._id
		});
		this.reset();
	};
}