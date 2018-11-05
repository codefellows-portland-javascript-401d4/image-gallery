import template from './remove-image.html';
import styles from './remove-image.scss'; 

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