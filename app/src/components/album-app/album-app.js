import template from './album-app.html';
import styles from './album-app.scss';

export default {
    template,
    controller,
    controllerAs: 'app'
};

controller.$inject = ['albumService'];

function controller(albumService) {
    this.styles = styles;
    this.loading = true;
    this.albums = [];
    this.view = 'detail';

    albumService
        .getAll()
        .then(albums => {
            this.albums = albums;
            this.loading = false;
        });

    this.addAlbum = album => {
        this.loading = true;
        albumService
            .add(album)
            .then(savedAlbum => {
                this.loading = false;
                this.albums.push(savedAlbum);
            });
    };
};