import template from './images.html';

export default {
	template,
	controller,
	controllerAs: 'images'   
};

controller.$inject = ['imageService'];

function controller(images) {

	this.loading = true;

    // call the get to load all images
	Image.get().then(images => {
		this.loading = false;
		this.images = images;
	});

    // remove this image
	this.remove = image => {
		this.loading = true;
		images.remove(image._id)
            .then(() => {
	this.loading = false;
                // after server has updated data, modify in-memory array
	const index = this.images.indexOf(image);
	if (index > -1) this.images.splice(index, 1);
});
	};

    // add an image
	this.add = image => {
		this.loading = true;
		images.add(image)
            .then(saved => {
	this.loading = false;
                // push to in-memory array
	this.images.push(saved);
});
	};
}