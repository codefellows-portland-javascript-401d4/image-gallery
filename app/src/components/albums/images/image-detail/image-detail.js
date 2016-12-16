import template from './image-detail.html';

export default {
    template,
    bindings: {
        image: '=',
        remove: '<'
    },
    controller
};

controller.$inject = ['albumService'];

function controller(albums) {

    albums.getAll().then(albums => {
        this.albums = albums;
        this.selected = albums[0].name;
    });

    this.selected = () => {
        albums.put(this._id).then(album => {
            console.log('albums', albums);
            console.log('album', album);
            this.album = album;
        });
    };

    this.delete = () => {
        this.remove(this.image);
    };

}