import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller,
  bindings: {
    albums: '<',
    id: '<'
  }
};

function controller() {
  this.styles = styles;
}