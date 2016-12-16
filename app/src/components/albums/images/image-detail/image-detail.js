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

controller.$inject = ['imageService'];
controller.$inject = ['albumService'];

function controller(albums, images) {

    this.selected = (albums, images) => {
        images.put(albums._id, images._id).then(saved => {
            console.log('saved', saved);
            console.log('albums._id, images._id', albums._id, images._id);
            this.images = images(saved);
            this.albums = albums(saved);
        });
    };

    albums.getAll().then(albums => {
        this.albums = albums;
        this.selected = albums[0].name;
    });

    this.delete = () => {
        this.remove(this.image);
    };

}