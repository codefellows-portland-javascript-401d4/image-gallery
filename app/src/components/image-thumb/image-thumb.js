import template from './image-thumb.html';
import styles from './image-thumb.scss';

export default {
  template,
  bindings: {
    image: '=',
    images: '<',
    remove: '<',
    toggleView: '<'
  },
  controller,
  controllerAs: '$thumb'
};

function controller() {
  this.styles = styles;
}