import template from './image-thumb.html';
import styles from './image-thumb.scss';

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