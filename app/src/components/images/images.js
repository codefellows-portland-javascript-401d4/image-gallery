import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    album: '<'
  },
  controller,
  controllerAs: 'imagesCtrl'
};

controller.$inject = ['imageService'];

function controller(imageService) {
  this.styles = styles;

  this.$onInit = () => {
    this.images = this.album.images;
  };

  this.removeImage = image => {
    imageService.remove(image._id)
      .then(() => {
        const idx = this.images.indexOf(image);
        if(idx > -1) this.images.splice(idx, 1);
      });
  };

  this.addImage = image => {
    imageService.addImage(image)
      .then(saved => {
        this.images.push(saved);
      });
  };

  this.imageType = 'text';
}