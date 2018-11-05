import template from './app.html';
import styles from './app.scss';

export default {
  template,
  controller,
  controllerAs: 'app'   
};

controller.$inject = ['albumService'];

function controller(albums) {

  this.styles = styles;

  this.loading = true;

  albums.get().then(albums => {
    this.loading = false;
    this.albums = albums;
  });

  this.remove = album => {
    this.loading = true;
    albums.remove(album._id)
            .then(() => {
              this.loading = false;
              const index = this.albums.indexOf(album);
              if (index > -1) this.albums.splice(index, 1);
            });
  };

  this.add = album => {
    this.loading = true;
    albums.add(album)
            .then(saved => {
              this.loading = false;
              this.albums.push(saved);
            });
  };
}