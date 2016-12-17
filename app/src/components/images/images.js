import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    image: '=',
    images: '=',
    albums: '=',
    album: '=',
    getAll: '<',
    removeImage: '<',
    toggleView: '<'
  },
  controller,
  controllerAs: '$images'
};

function controller() {
  this.styles = styles;
  
  this.view = 'list';

}