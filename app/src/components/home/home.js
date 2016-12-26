import template from './home.html';
import styles from './home.scss';

export default {
  template,
  styles,
  controller
};

function controller() {
  this.styles = styles;
  
}