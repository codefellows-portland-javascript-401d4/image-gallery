import template from './album-collection.html';
import styles from './album-collection.scss';

export default {
  template,
  bindings: {
    images: '<',
    album: '<',
    albums: '<'
  },
  controller,
  controllerAs: '$albumCollection'
};

function controller() {
  this.styles = styles;

  this.view = 'list';
}