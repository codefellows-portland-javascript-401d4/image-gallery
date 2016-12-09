import template from './new-image.html';

export default {
	template,
	bindings: {
		images: '<' 
	},
	controller,
	controllerAs: 'newImage'  
};

function controller(images) {

	this.reset = () => {
		this.title = '';
		this.url = '';
		this.description ='';
	};

	this.reset();

	this.addNew = () => {
		console.log(images);
		images.add({
			title: this.title,
			url: this.url,
			description: this.description
		});
        // clear out controls so
        // next image can be added
		this.reset();
	};
}