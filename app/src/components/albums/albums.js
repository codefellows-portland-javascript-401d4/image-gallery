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

  this.loading = true;

  this.updateView = () => {
    $state.go($state.current.name, { view: this.view });
  };

  albums.get().then(albums => {
    this.loading = false;
    this.albums = albums;
  });

  this.add = album => {
    this.loading = true;
    albums.add(album)
            .then(saved => {
              this.loading = false;
                // push to in-memory array
              this.albums.push(saved);
            });
  };
}