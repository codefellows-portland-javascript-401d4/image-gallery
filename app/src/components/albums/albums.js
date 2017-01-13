import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  styles,
  controller
};

controller.$inject = ['albumService', '$state'];

function controller(albumService, $state) {
  this.styles = styles;

  albumService.get()
    .then(albums => {
      this.albums = albums;
    })
    .catch();

  this.add = album => {
    albumService.add(album)
      .then(saved => this.albums.push(saved))
      .catch();
  };

  this.view = albumId => {
    $state.go('images', {id: albumId});
  };
}