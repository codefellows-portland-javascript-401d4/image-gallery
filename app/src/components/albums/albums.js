import template from './albums.html';
// import styles from './albums.scss';

export default {
	template,
	controller,
	controllerAs: 'albums'   
};

controller.$inject = ['albumService'];

function controller(albums) {
	this.loading = true;
 
	// this.styles = styles;

    // call the get to load all albums
	albums.get().then(albums => {
		this.loading = false;
		this.albums = albums;
	});

    // remove this album
	this.remove = album => {
		this.loading = true;
		albums.remove(album._id)
            .then(() => {
	this.loading = false;
                // after server has updated data, modify in-memory array
	const index = this.albums.indexOf(album);
	if (index > -1) this.albums.splice(index, 1);
});
	};

    // add an album
// 	this.add = album => {
// 		this.loading = true;
// 		albums.add(album)
//             .then(saved => {
// 	this.loading = false;
//                 // push to in-memory array
// 	this.albums.push(saved);
// });
// 	};
}