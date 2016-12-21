import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller
};

controller.$inject = ['albumService', '$state'];

function controller(albumService, $state) {
  this.styles = styles;

  albumService.getAll()
    .then(albums => {
      this.albums = albums;
    })
    .catch();

  this.add = album => {
    albumService.add(album)
      .then(saved => this.albums.push(saved))
      .catch();
  };

  this.viewAlbum = (albumId) => {
    $state.go('images', { id: albumId });
  };

// remove function not yet working
  // this.remove = album => {
  //   albums.+remove(album._id)
  //     .then(() => {
  //       const index = this.albums.indexOf(album);
  //       if(index > -1) this.albums.splice(index, 1);
  //     });
  // };
};