import template from './welcome.html';
import styles from './welcome.scss';

export default {
  template,
  styles,
  controller
};

function controller() {
  this.styles = styles;
}
