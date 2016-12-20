import template from './image-app.html';
import style from './image-app.scss';

export default {
  template,
  controller
};

controller.$inject = ['galleryService'];

function controller(galleryService) {
  this.style = style;
  this.view = '';

  galleryService
    .getAlbums()
    .then(images => {
      this.images = images;
    });

  this.remove = function(id) {
    galleryService.removeImage(id)
      .then(removed => {
        const index = this.images.indexOf(removed);
        if (index > -1) this.images.splice(index, 1);
      });
  };

}