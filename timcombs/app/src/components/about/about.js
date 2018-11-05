import template from './about.html';
import styles from './about.scss';

export default {
  template,
  controller,
  controllerAs: '$about'
};

function controller() {
  this.styles = styles;
}