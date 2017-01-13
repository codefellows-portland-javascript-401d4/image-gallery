import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller
};

controller.$inject = ['albumService'];

function controller(albumService) {
  this.styles = styles;
  this.view = 'albums';

  albumService.getAll()
    .then(albums => {
      this.albums = albums;
    })
    .catch(err => {
      console.log('Album controller getAll catch', err);
    });

  this.add = album => {
    albumService.add(album)
      .then(saved => this.albums.push(saved))
      .catch(err => {
        console.log('Album service add catch', err);
      });
  };

}