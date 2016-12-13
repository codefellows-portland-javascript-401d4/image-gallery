import template from './image-app.html';
import styles from './image-app.scss';

export default {
  template,
  controller,
  bindings: {
    add: '='
  }
};

controller.$inject = ['imageService'];
function controller(images) {
  images.get().then(images => {
    this.img = images[0];
  });
  this.view = 'detail';
  this.styles = styles;
}