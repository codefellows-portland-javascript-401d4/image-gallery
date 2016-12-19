import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller
};

controller.$inject = ['albumService'];

function controller(albumService) {
  this.styles = styles;

  albumService.getAll()
    .then(albums => {
      this.albums = albums;
    })
    .catch(err => {
      console.log('Album controller getAll catch', err);
    });

}