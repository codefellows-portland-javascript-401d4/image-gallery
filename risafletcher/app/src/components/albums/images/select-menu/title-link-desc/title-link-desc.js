import template from './title-link-desc.html';
import styles from './title-link-desc.scss';

export default {
  template,
  controller,
  bindings: {
    album: '<',
    images: '='
  }
};

controller.$inject = ['imageService'];

function controller(images) {
  this.styles = styles;

  this.remove = image => {
    images.remove(image._id)
      .then(() => {
        const index = this.album.images.indexOf(image);
        if(index > -1) this.album.images.splice(index, 1);
      });
  };
}