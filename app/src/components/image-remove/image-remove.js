import template from './image-remove.html';
import styles from './image-remove.scss';

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

  this.removeImage = () => {
    this.remove(this.image);
  };
}
