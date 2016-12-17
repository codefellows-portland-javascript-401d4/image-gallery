import template from './images.html';

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
    imageService.add(image)
      .then(saved => {
        this.images.push(saved);
      });
  };

  this.imageChoice = this.imageArr;

  this.choices = ['full', 'thumbnail', 'text'];

  this.imageType = this.choices[2];
}