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
        console.log(albums);
    });

    // this.$onInit = () => {
    //     albums.get(this.id).then(album => {
    //         this.album = album;
    //     });
    // };

    this.delete = () => {
        this.remove(this.image);
    };

}