import template from './image-app.html';
import styles from './image-app.scss';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];
function controller(images) {
  images.get().then(images => {
    this.img = images;
  });
  this.view = 'detail';
  this.styles = styles;

  this.add = image => {
    images.add(image)
      .then(saved => {
        this.img.push(saved);
      });
  };
}