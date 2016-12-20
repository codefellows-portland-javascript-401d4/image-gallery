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
    console.log('id is ', this.id);
    galleryService.getAlbum(this.id)
      .then(images => {
        this.images = images;
      });
  };

  this.uiOnParamsChanged = (params) => {
    this.display = params.display;
  };

}