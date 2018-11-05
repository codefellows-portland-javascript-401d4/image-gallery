import template from './image-gallery.html';
import styles from './image-gallery.scss';

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