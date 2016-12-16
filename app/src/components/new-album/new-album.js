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
    this.category = '';
  };

  this.addNew = () => {
    this.add({
      name: this.name,
      category: this.category
    });
    this.resetFields();
  };
};