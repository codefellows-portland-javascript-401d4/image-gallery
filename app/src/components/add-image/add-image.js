import template from './add-image.html';
import styles from './add-image.scss';

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
    this.title = '';
    this.description = '';
    this.url = '';
  };

  this.addNew = () => {
    this.add({
      title: this.title,
      description: this.description,
      url: this.url
    });
    this.reset();
    this.view = 'thumbnail';
  };
}