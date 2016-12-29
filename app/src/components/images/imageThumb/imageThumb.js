import template from './imageThumb.html';
import styles from './imageThumb.scss';

export default {
  template,
  bindings: {
    image: '<',
    removeImage: '<'
  },
  controller,
  controllerAs: 'thumbCtrl'
};

function controller() {
  this.styles = styles;
}