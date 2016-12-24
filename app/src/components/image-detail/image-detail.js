import template from './image-detail.html';
import styles from './image-detail.scss';

export default {
  bindings: {
    image: '<',
    images: '<',
  },
  controller,
  template
};

function controller() {
  this.styles = styles;
}