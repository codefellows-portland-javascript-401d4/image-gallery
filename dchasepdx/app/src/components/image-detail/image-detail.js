import template from './image-detail.html';
import styles from './image-detail.scss';

export default {
  template,
  controller,
  bindings: {
    img: '='
  }
};

function controller() {
  this.styles = styles;
}