import template from './add-album.html';
import styles from './add-album.scss';

export default {
  template,
  bindings: {
    addAlbum: '<',
    albums: '<'
  },
  controller
};

function controller() {
  this.styles = styles;
  this.reset = () => {
    this.name = '';
  };

  this.reset();

  this.addNew = () => {
    this.addAlbum({
      name: this.name
    });
    this.reset();
  };
}