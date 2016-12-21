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

controller.$inject = ['imageService', 'albumService', '$timeout'];

function controller(images, albums, $timeout) {
	
	this.reset = () => {
		this.title = '';
		this.url = '';
		this.description ='';
		this.albumId='';
		this.albumTitle='';
		this.albumDescription='';
		this.added=false;
		this.albumAdded=false;
	};
	this.reset();

	this.addNewAlbum = () => {
		albums.add({
			title: this.albumTitle,
			description: this.albumDescription,
		});
		this.albumAdded=true;
		$timeout(()=>{
			this.reset();
		},1800);

	};

	this.addNewImage = () => {
		images.add({
			title: this.title,
			url: this.url,
			description: this.description,
			albumId: this.album._id
		});
		this.added = true;

		$timeout(()=>{
			this.reset();
		},1800);
	};
}