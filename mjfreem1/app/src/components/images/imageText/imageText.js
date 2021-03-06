import template from './imageText.html';
import styles from './imageText.scss';

export default {
  template,
  bindings: {
    image: '<',
    removeImage: '<'
  },
  controller,
  controllerAs: 'textCtrl'
};

function controller() {
  this.styles = styles;
}