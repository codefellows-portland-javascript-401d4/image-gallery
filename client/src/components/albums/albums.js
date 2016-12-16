import template from './albums.html';
import styles from './albums.scss';

export default {
    template,
    controller
};

controller.$inject = ['albumService', '$state'];

function controller(albums, $state) {

    this.styles = styles;

    this.updateView = () => {
        $state.go($state.current.name, {view: this.view});
    };

    albums.get().then(albums => {
        this.albums = albums;
    });

    this.addAlbum = album => {
        albums.add({
            name: this.name,
            featured: this.featured
        })
            .then(saved => {
                // push to in-memory array
                this.albums.push(saved);
            });
    };

}
