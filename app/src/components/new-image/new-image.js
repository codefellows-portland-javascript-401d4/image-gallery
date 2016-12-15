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

function controller() {

	this.reset = () => {
		this.title = '';
		this.url = '';
		this.description ='';
		this.albumId='';
	};

	this.reset();

	this.addNew = () => {
		console.log(this);
		this.add({
			title: this.title,
			url: this.url,
			description: this.description,
			albumId: this.albumId
		});
		console.log('image added');
        // clear out controls so
        // next image can be added
		this.reset();
	};
}