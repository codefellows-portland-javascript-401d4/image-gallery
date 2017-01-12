import template from './new-album.html';
import styles from './new-album.scss';

export default {
  template,
  bindings: {
    add: '<'
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
    this.add({
      name: this.name
    });
    // clear out controls so next album can be added
    this.reset();
  };
}
