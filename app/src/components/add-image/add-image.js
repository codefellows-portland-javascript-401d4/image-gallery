import template from './add-image.html';
import styles from './add-image.scss';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

function controller() {
  this.styles = styles;

  this.addNew = () => {
    this.add({
      title: this.title,
      description: this.description,
      url: this.url
    });
  };
}