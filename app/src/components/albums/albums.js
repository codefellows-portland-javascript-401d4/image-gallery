import template from './albums.html';
import styles from './albums.scss';
export default {
    template,
    controller
};

controller.$inject = ['albumService', '$state'];

function controller(albums, $state) {
    
    this.view = 'detail';
    this.styles = styles;

    this.updateView = () => {
        $state.go($state.current.name, { view: this.view });
    };

    albums.get().then(albums => {
        this.albums = albums;
    });
}