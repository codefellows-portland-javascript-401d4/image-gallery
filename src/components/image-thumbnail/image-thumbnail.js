import template from './image-thumbnail.html';
import styles from './image-thumbnail.css';

export default {
  template,
  bindings: {
    image: '='
  },
  controller
};

function controller() {
  this.styles = styles;
  this.selected = 'thumbnail';
}
