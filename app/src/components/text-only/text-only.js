import template from './text-only.html';
import styles from './text-only.scss'; 

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