import template from './image-detail.html';

export default {
    template,
    bindings: {
        // id: '<',
        image: '=',
        album: '=',
        view: '<',
        remove: '<',
        put: '<'
    },
    controller
};

controller.$inject = ['albumService', 'imageService'];

function controller(albums, images) {

    this.chosen = (albumid, imageid) => {
        images.put(albumid, imageid).then(saved => {
            console.log('saved', saved);
            images.getById(imageid).then(saved => {
                console.log('saved getById', saved);
                this.image.album = saved.album;
            });
        });
    };

    albums.getAll().then(albums => {
        this.albums = albums;
    });

    this.delete = () => {
        this.remove(this.image);
    };

    this.uiOnParamsChanged = params => {
        this.view = params.view;
    };
}