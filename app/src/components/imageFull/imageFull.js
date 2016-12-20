import template from './imageFull.html';
import styles from './imageFull.scss';

export default {
  template,
  bindings: {
    image: '<'
  },
  controller,
  controllerAs: 'fullCtrl'
};

function controller() {
  this.styles = styles;
}