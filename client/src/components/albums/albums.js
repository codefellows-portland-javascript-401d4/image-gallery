import template from './albums.html';
import styles from './albums.scss';

export default {
    template,
    controller
};

controller.$inject = ['albumService', '$state'];

function controller(albums, $state) {

    this.styles = styles;

    albums.get().then(albums => {
        this.albums = albums;
    });

}
