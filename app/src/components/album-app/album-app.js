import template from './album-app.html';
import styles from './album-app.scss';

export default {
    template,
    controller,
    controllerAs: 'app'
};

controller.$inject = ['imageService', 'albumService', '$state'];

function controller(imageService, albumService, $state) {
    this.styles = styles;
    this.loading = true;
    this.albums = [];
    this.view = '';

    // this.$onInit = () => { // testing doesn't seem to like this
    albumService
        .getAll()
        .then(albums => {
            this.albums = albums;
            this.loading = false;
        });
    // };

    this.updateView = () => {
        $state.go($state.current.name, { view: this.view });
    };

    this.add = album => {
        this.loading = true;
        albumService
            .add(album)
            .then(savedAlbum => {
                this.loading = false;
                this.albums.push(savedAlbum);
            });
    };
};