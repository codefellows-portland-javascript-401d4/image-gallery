import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller,
  controllerAs: '$albums'
};

controller.$inject = ['albumService'];

function controller(albums) {
  this.styles = styles;
  
  this.view = 'list';

  this.loading = true;

  albums.getAll().then(albums => {
    this.loading = false;
    this.albums = albums;
  });

  this.addAlbum = album => {
    this.loading = true;
    albums.addAlbum(album)
      .then(saved => {
        this.loading = false;
        this.albums.push(saved);
      });
  };

  this.remove = album => {
    this.loading = true;
    albums.remove(album._id)
      .then(() => {
        this.loading = false;
        const index = this.albums.indexOf(album);
        if (index > -1) this.albums.splice(index, 1);
      });
  };

  this.toggleAlbum = name => {
    this.view = name;
  };

}