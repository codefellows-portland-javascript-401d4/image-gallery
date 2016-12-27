import template from './image-new.html';
import styles from './image-new.scss'

export default {
  template,
  bindings: {
    image: '=',
    add: '<'
  },
  controller
};

function controller() {
  this.styles = styles;

  this.reset = () => {
    this.title = '';
    this.url = '';
    this.description = '';
  };

  this.addNew = () => {
    this.add({
      title: this.title,
      url: this.url,
      description: this.description
    });
    this.reset();
  };
}