import template from './albums.html';
import styles from '../images/images.scss';

export default {
  template,
  controller
};

controller.$inject = ['albumService','$state'];

function controller(albums, $state) {

  this.styles = styles;

  this.view = 'detail';

  this.loading = true;

  albums.getAll().then(albums => {
    this.loading = false;
    this.albums = albums;
  });

  this.add = album => {
    albums.add(album)
    .then(saved => {
      this.albums.push(saved);
    });
  };

  this.updateView = () => {
    $state.go($state.current.name, { view: this.view });
  };

  this.new = () => {
    this.viewNew = true;
    this.viewDetail = false;
  };

  this.detail = () => {
    this.viewDetail = true;
    this.viewNew = false;
  };

}
