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
    .get()
    .then(images => {
      this.images = images;
    });

  this.add = function(image) {
    galleryService.add(image)
      .then(saved => {
        this.images.push(saved);
      });
  };

  this.remove = function(id) {
    galleryService.remove(id)
      .then(removed => {
        const index = this.images.indexOf(removed);
        if (index > -1) this.images.splice(index, 1);
      });
  };

}