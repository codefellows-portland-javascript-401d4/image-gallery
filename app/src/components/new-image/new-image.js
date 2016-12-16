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
		console.log(this);
		console.log('album title is ', this.albumTitle);
		console.log('album description is ', this.albumDescription);
		albums.add({
			title: this.albumTitle,
			description: this.albumDescription,
		});
		console.log('new album added');
		this.reset();
	};

	this.addNewImage = () => {
		console.log(this);
		images.add({
			title: this.title,
			url: this.url,
			description: this.description,
			albumId: this.album._id
		});
		console.log('new image added');
		this.reset();
	};
}