import template from './image-list.html';
import styles from './image-list.scss';

export default {
  template,
  bindings: {
    image: '=',
    remove: '<',
    toggleView: '<'
  },
  controller,
  controllerAs: '$list'
};

function controller() {
  this.styles = styles;
}