import template from './image-thumbnail.html';
import styles from './image-thumbnail.scss';

export default {
  template,
  bindings: {
    thumbnails: '='
  },
  controller,
  controllerAs: 'app'
};

function controller () {
  this.styles = styles;
  
};