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
    removeImage: '<'
  },
  controller,
  controllerAs: '$images'
};

function controller() {
  this.styles = styles;
  
  this.view = 'list';

  this.toggleView = name => {
    this.view = name;
  };

}