import template from './image-gallery.html';

export default {
	template,
	bindings: { 	
		remove: '<',
		images: '='
	},
	controller,
	controllerAs: 'imageGallery'
};

function controller() {
	this.removeImage = (image) => {
		this.remove(image);
	};
}