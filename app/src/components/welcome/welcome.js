import template from './welcome.html';
import styles from './welcome.scss';

export default {
  template,
  controller,
  controllerAs: '$welcome'
};

function controller() {
  this.styles = styles;
}