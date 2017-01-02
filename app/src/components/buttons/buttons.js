import template from './buttons.html';
import styles from './buttons.scss';

export default {
  template,
  controller,
  bindings: {
    display: '='
  }
};

function controller() {
  this.styles = styles;
}