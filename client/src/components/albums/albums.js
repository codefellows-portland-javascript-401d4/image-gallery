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

    this.reset = () => {
        this.name = '';
        this.featured = '';
    };

    this.reset();

    this.addAlbum = album => {
        albums.add({
            name: this.name,
            featured: this.featured
        })
            .then(saved => {
                // push to in-memory array
                this.albums.push(saved);
            })
            .then(this.reset());
    };

    this.deleteAlbum = (album, event) => {
        // const thisAlbum = this.albums.indexOf(album);
        // console.log('this album: ', this.albums);
        event.stopPropagation();
        albums.remove(album._id)
        .then(() => {
            const index = this.albums.indexOf(album);
            if (index > -1) this.albums.splice(index, 1);
        });
    };

}
