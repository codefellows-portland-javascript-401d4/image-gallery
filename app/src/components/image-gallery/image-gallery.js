import template from './image-gallery.html';
import styles from './image-gallery.scss';

export default {
  bindings: {
    images: '<'
  },
  controller,
  template
};

function controller() {
  this.styles = styles;
}