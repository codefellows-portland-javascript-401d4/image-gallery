import template from './image-view.html';
import styles from './image-view.scss';

export default {
  template, 
  bindings: {
    remove: '<',
    images: '='
  },
  controller
};

function controller () {

  this.styles = styles;

  this.trash = (image) => {
    this.remove(image);
  };
  
}