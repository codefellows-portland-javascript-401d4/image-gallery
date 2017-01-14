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

  this.imagesBar = false;

  albumService.get()
    .then(albums => {
      this.albums = albums;
    })
    .catch();

  this.add = album => {
    albumService.post(album)
      .then(saved => this.albums.push(saved))
      .catch();
  };

  this.view = albumId => {
    console.log(albumId);
    $state.go('albums.images', {id: albumId});
    this.imagesBar = true;
  };
}