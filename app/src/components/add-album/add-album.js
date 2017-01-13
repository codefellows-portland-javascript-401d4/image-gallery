import template from './add-album.html';
import styles from './add-album.scss';

export default {
  template,
  bindings: {
    add: '<',
    view: '='
  },
  controller
};

function controller() {
  this.styles = styles;

  this.reset = () => {
    this.name = '';
  };

  this.addNew = () => {
    this.add({ name: this.name });
    this.reset();
    this.view = 'info';
  };
}