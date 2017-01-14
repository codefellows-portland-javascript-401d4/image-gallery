import template from './image-preview.html';
import styles from './image-preview.scss';

export default {
  template,
  bindings: {
    image: '='
  },
  controller
};

function controller() {
  this.styles = styles;
}
