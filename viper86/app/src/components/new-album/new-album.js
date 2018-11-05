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

  this.resetFields = () => {
    this.name = '';
  };

  this.addNew = () => {
    this.add({
      name: this.name,
    });
    this.resetFields();
  };
};