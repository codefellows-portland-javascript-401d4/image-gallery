import template from './image-detail.html';

export default {
    template,
    bindings: {
        image: '=',
        album: '=',
        remove: '<',
        put: '<',
        getAll: '<'
    },
    controller
};

controller.$inject = ['albumService', 'imageService'];

function controller(albums, images) {

    this.chosen = (albumid, imageid) => {
        console.log('albumid, imageid', albumid, imageid);
        images.put(albumid, imageid).then(saved => {
            console.log('saved', saved);
        });
    };

    albums.getAll().then(albums => {
        this.albums = albums;
        // this.selected = albums[0].name;
    });

    this.delete = () => {
        this.remove(this.image);
    };

}