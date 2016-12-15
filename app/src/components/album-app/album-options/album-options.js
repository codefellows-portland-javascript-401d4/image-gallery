import template from './album-options.html';
import styles from './album-options.scss';

export default {
    template,
    bindings: {
        name: '<',
        view: '<'
    },
    controller
};

controller.$inject = ['albumService'];

function controller(albumService) {
    this.styles = styles;
    this.loading = true;
    this.album = [];

    this.$onInit = () => {
        albumService
            .getAlbum(this.name)
            .then(album => {
                this.album = album;
            });
    };
};