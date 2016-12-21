import template from './album.html';

export default {
    template,
    bindings: {
        album: '<',
    },
    controller
};

controller.$inject = ['albumService'];

function controller(albumService) {
    this.uiOnParamsChanged = params => {
        this.view = params.view;
    };

    this.add = image => {
        console.log(this.album);
        albumService.addNewImage(this.album._id, image)
            .then(saved => this.album.images.push(saved));
    };
}