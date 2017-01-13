import template from './title-link-desc.html';
import styles from './title-link-desc.scss';

export default {
  template,
  controller,
  bindings: {
    image: '='
  }
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
}