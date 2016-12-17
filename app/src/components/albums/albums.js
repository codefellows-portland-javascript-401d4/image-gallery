import template from './albums.html';
import styles from './albums.scss';

//controller.$inject = ['albumService'];

export default {
  template,
  bindings: {
    image: '=',
    album: '=',
    albums: '=',
    getAll: '<',
    removeAlbum: '<',
    toggleAlbum: '<'
  },
  controller,
  controllerAs: '$albums'
};

function controller(/*albumService*/) {
  this.styles = styles;

  // this.albums = albumService.getAll()
  //   .then(albums => {
  //     this.albums = albums;
  //   })
  //   .catch();

  this.view = 'list';

}