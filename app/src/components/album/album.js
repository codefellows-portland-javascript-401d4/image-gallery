import template from './album.html';
import styles from './album.scss';

export default {
  template,
  controller,
  bindings: {
    images: '<',
    display: '=',
    id: '<'
  }
};

controller.$inject = ['galleryService'];

function controller(galleryService) {
  this.styles = styles;
  this.display = 'thumb';

  this.$onInit = () => {
    galleryService.getAlbum(this.id)
      .then(images => {
        this.images = images;
      });
  };

}