import template from './images.html';
import styles from './images.scss';

export default {
	template,
	controller,
	controllerAs: 'images'   
};

controller.$inject = ['imageService', 'albumService'];

function controller(images, albums) {
	this.loading = true;
 
	this.styles = styles;
	
	this.displays = ['thumbnail', 'text', 'full', 'all'];
	

	this.filterImages = function(){
		images.getByAlbum(this.albumChoice).then(images => {
			this.loading = false;
			this.images = images;
		});
	};

	  // call the get to load all albums
	albums.get().then(albums => {
		this.loading = false;
		this.albums = albums;
	});

    // call the get to load all images
	// images.get().then(images => {
	// 	this.loading = false;
	// 	this.images = images;
	// });

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
// 	this.add = image => {
// 		this.loading = true;
// 		images.add(image)
//             .then(saved => {
// 	this.loading = false;
//                 // push to in-memory array
// 	this.images.push(saved);
// });
// 	};
}