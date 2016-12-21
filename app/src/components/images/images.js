import template from './images.html';
import styles from './images.scss';

export default {
	template,
	controller,
	controllerAs: 'images'   
};

controller.$inject = ['imageService', 'albumService', '$timeout'];

function controller(images, albums, $timeout) {
	this.loading = true;
	this.deleted = false;
	this.styles = styles;
	this.displays = ['thumbnail', 'text', 'full'];
	
	//find images that meet the filter selection
	this.filter = function(){
		if(this.albumChoice.title === 'All Albums')	{
			//finds all images if alll images choice is selected
			images.get().then(images => {
				this.loading = false;
				this.images = images;
			});
		}
		else{
			//finds images from the selected album
			images.getByAlbum(this.albumChoice._id).then(images => {
				this.loading = false;
				this.images = images;
			});
		}
	};

	albums.get().then(albums => {
		this.loading = false;
		this.albums = albums;
		albums.push({title: 'All Albums'});
	});
  
    // remove this image
	this.remove = image => {
		this.loading = true;
		this.imagename = image.title;
		this.deleted = true;
		$timeout(()=>{
			this.deleted=false;
			images.remove(image._id)
            .then(() => {
	this.loading = false;
                // after server has updated data, modify in-memory array
	const index = this.images.indexOf(image);
	if (index > -1) this.images.splice(index, 1);
});
		},1800);

	};
}