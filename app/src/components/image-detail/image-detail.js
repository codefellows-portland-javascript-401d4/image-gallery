import template from './image-detail.html';

export default {
	template,
	bindings: {
		remove: '<',
		images: '=',
		deleted: '=',
		imagename: '<'
	},
	controller,
	controllerAs: 'imageDetail'  
};

function controller() {
	this.removeImage = (image) => {
		this.remove(image);
	};
}