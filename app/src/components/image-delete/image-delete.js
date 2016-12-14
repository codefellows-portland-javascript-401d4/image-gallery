import template from './image-delete.html';
import styles from './image-delete.scss';

export default {
  template, 
  bindings: {
    remove: '<',
    images: '='
  },
  controller
};

controller.$inject = ['imageService'];

function controller (imageService) {

  this.styles = styles;

  this.images= [];

  imageService.get()
    .then(images => {
      this.images = images;
    });

  this.trash = (image) => {

    imageService.remove(image)
      .then(removed => {
        let theIndex = this.images.indexOf(removed);
        if (theIndex > -1) this.images.splice(theIndex, 1);
      });
  };
}
