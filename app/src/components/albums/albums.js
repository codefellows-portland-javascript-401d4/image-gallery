import template from './albums.html';
import styles from '../images/images.scss';

export default {
  template,
  controller
};

controller.$inject = ['albumService'];

function controller(albums) {

  this.styles = styles;

  this.loading = true;

  albums.get().then(albums => {
    this.loading = false;
    this.albums = albums;
  });

  this.add = album => {
    albums.add(album)
    .then(saved => {
      this.albums.push(saved);
    });
  };

  this.new = function() {
    this.viewNew = true;
    this.viewDetail = false;
  };

  this.detail = function() {
    this.viewDetail = true;
    this.viewNew = false;
  };



}
