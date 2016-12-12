import template from './image-add.html';
import styles from './image-add.css';

export default {
  template,
  bindings: {
    add:'<'
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

  this.addImage = () => {
    this.add({
      title: this.title,
      url: this.url,
      description: this.descrition
    });
    this.reset();
  };
}