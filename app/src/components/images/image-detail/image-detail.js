import template from './image-detail.html';
import styles from './image-detail.scss';

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
