import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    images: '<'
  },
  controller,
  controllerAs: 'imagesCtrl'
};

controller.$inject = ['imageService'];

function controller(imageService) {
  this.styles = styles;

  // imageService.getAll()
  //   .then(images => {
  //     this.imageArr = images;
  //   });

  // imageService.getOne()
  //   .then(image => {

  //   })

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
  // this.choice = this.imageType;

  this.imageChoice = this.imageArr;

  this.choices = ['full', 'thumbnail', 'text'];

  // this.imageType = this.choices[2];
}