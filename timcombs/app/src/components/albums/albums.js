import template from './albums.html';
import styles from './albums.scss';

controller.$inject = ['albumService'];

export default {
  template,
  bindings: {
    image: '=',
    album: '=',
    albums: '='
  },
  controller,
  controllerAs: '$albums'
};

function controller(albumService) {
  this.styles = styles;

  this.view = 'list';

  this.loading = true;

  this.toggleView = name => {
    this.view = name;
  };

  this.removeAlbum = album => {
    this.loading = true;
    albumService.remove(album._id)
      .then(() => {
        this.loading = false;
        const index = this.albums.indexOf(album);
        if (index > -1) this.albums.splice(index, 1);
      });
  };

}