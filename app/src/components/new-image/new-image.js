import template from './new-image.html';

export default {
	template,
	bindings: {
		add: '<'
	},
	controller,
	controllerAs: 'newImage'  
};

function controller() {

	this.reset = () => {
		this.title = '';
		this.url = '';
		this.description ='';
	};

	this.reset();

	this.addNew = () => {
		console.log(this);
		this.add({
			title: this.title,
			url: this.url,
			description: this.description
		});
		console.log('image added');
        // clear out controls so
        // next image can be added
		this.reset();
	};
}