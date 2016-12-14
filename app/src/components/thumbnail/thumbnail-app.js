import template from './thumbnail-app.html';
import styles from './thumbnail-app.css';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(images) {
  this.styles = styles;

  images.get().then(images => {
    this.images = images;
  });

  this.remove = image => {
    images.remove(image._id)
      .then(() => {
        const index = this.images.indexOf(image);
        if(index > -1) this.images.splice(index, 1);
      });
  };

  this.add = image => {
    images.add(image)
      .then(saved => {
        this.pirates.push(saved);
      });
  };
}