import template from './images.html';
import styles from './images.scss';

export default {
  template,
  controller,
  controllerAs: '$images'
};

controller.$inject = ['imageService'];

function controller(images) {
  this.styles = styles;
  
  this.view = 'list';

  this.loading = true;

  images.getAll().then(images => {
    this.loading = false;
    this.images = images;
  });

  this.addImage = image => {
    this.loading = true;
    images.addImage(image)
      .then(saved => {
        this.loading = false;
        this.images.push(saved);
      });
  };

  this.remove = image => {
    this.loading = true;
    images.remove(image._id)
      .then(() => {
        this.loading = false;
        const index = this.images.indexOf(image);
        if (index > -1) this.images.splice(index, 1);
      });
  };

  this.toggleView = name => {
    this.view = name;
  };

}