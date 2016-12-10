import template from './image-thumb.html';

export default {
	template,
	bindings: {
		remove: '<',
		images: '='
	},
	controller,
	controllerAs: 'imageThumb'
};

function controller() {
	this.removeImage = (image) => {
		this.remove(image);
	};
}

