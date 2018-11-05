import template from './image-large.html';
import styles from './image-large.scss';

export default {
  template,
  bindings: {
    image: '=',
    remove: '<'
  },
  controller
};

function controller() {
  this.styles = styles;
  this.delete = () => {
    this.remove(this.image);
  };
}