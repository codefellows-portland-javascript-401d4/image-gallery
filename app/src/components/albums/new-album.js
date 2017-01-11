import template from './new-album.html';
import styles from './new-album.scss';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

// controller.$inject=['albumService'];

// function controller(albumService) {

function controller() {
  this.stles = styles;

  this.reset = () => {
    this.name = '';
  };

  this.reset();

  this.addNew = () => {
    // albumService.add({
    this.add({
      name: this.name
    });
    // clear out controls so next album can be added
    this.reset();
  };
}
