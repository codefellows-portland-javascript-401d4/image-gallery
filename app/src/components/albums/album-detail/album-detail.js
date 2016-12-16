import template from './album-detail.html';
import styles from './album-detail.scss';

export default {
    template,
    bindings: {
        id: '<',
        view: '<',
        remove: '<'
    },
    controller
};

controller.$inject = ['albumService'];

function controller(albums) {
    
    this.styles = styles;

    this.$onInit = () => {
        albums.get(this.id).then(album => {
            this.album = album;
        });
    };

    this.uiOnParamsChanged = params => {
        this.view = params.view;
    };

    this.deleteAlbum = () => {
        albums.remove(this.id);
    };
}