import template from './image-new.html';
import styles from './image-new.css'

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

  this.reset();

  this.addNew = () => {
    this.add({
      title: this.title,
      url: this.url,
      description: this.description
    });
    this.reset();
  };
}