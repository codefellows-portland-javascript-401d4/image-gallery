import template from './image-gallery.html';

export default {
	template,
	bindings: { 	
		remove: '<',
		images: '=',
		deleted: '=',
		imagename: '<'
	},
	controller,
	controllerAs: 'imageGallery'
};

function controller() {
	this.removeImage = (image) => {
		this.remove(image);
	};
}