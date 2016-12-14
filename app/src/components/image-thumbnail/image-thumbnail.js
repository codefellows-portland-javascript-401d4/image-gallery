import styles from './image-thumbnail.scss';
import template from './image-thumbnail.html';

export default {
  template,
  bindings: {
    images: '='
  },
  controller () {this.styles = styles;}
};