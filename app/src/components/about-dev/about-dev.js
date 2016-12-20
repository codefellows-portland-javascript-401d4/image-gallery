import template from './about-dev.html';
import styles from './about-dev.scss';

export default {
  template,
  controller
};

function controller() {
  this.styles = styles;
  this.answer;
};