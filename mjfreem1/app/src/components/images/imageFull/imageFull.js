import template from './imageFull.html';
import styles from './imageFull.scss';

export default {
  template,
  bindings: {
    image: '<',
    removeImage: '<'
  },
  controller,
  controllerAs: 'fullCtrl'
};

function controller() {
  this.styles = styles;
}