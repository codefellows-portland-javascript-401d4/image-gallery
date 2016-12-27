import template from './new-image.html';
import styles from './new-image.scss';

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
    this.url = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      name: this.name,
      url: this.url
    });
    // clear out controls so next image can be added
    this.reset();
  };
}
