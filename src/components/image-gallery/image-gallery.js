import template from './image-gallery.html';
import styles from './image-gallery.css';

export default {
  template,
  bindings: {
    img: '='
  },
  controller
};

function controller() {
  this.styles = styles;
}