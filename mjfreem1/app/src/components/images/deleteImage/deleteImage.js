import template from './deleteImage.html';
import styles from './deleteImage.scss';

export default {
  template,
  bindings: {
    image: '=',
    removeImage: '<'
  },
  controller,
  controllerAs: 'deleteCtrl'
};

function controller() {
  this.styles = styles;

  this.delete = () => {
    this.removeImage(this.image);
  };
}