import template from './album-app.html';
import styles from './album-app.scss';

export default {
    template,
    controller,
    controllerAs: 'app'
};

controller.$inject = ['imageService', 'albumService'];

function controller(imageService, albumService) {
    this.styles = styles;
    this.loading = true;
    this.albums = [];

    this.$onInit = () => {
        albumService
            .getAll()
            .then(albums => {
                this.albums = albums;
                this.loading = false;
            });
    };


};