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
        console.log(albums);
        console.log(albums[0].name);
    });

    this.addtoalbum = (album) => {
        albums.put(album).then(album => {
            this.album = album;
        });
    };


    this.delete = () => {
        this.remove(this.image);
    };

}