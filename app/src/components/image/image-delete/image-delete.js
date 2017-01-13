import template from './image-delete.html';

export default {
  template, 
  bindings: {
    images: '='
  },
  controller
};

controller.$inject = ['imageService'];

function controller (imageService) {

  this.images = [];

  this.trash = (image) => {
    imageService.remove(image)
      .then(() => {
        imageService.get()
          .then(images => this.images = images);
      });
  };
}
