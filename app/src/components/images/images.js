import template from './images.html';

export default {
  template,
  controller,
  controllerAs: 'imagesCtrl'
};

controller.$inject = ['imageService'];

function controller(imageService) {

  imageService.getAll()
    .then(images => {
      this.imageArr = images;
    });

  // imageService.getOne()
  //   .then(image => {

  //   })

  this.removeImage = image => {
    imageService.remove(image._id)
      .then(() => {
        const idx = this.imageArr.indexOf(image);
        if(idx > -1) this.imageArr.splice(idx, 1);
      });
  };

  this.addImage = image => {
    imageService.add(image)
      .then(saved => {
        this.imageArr.push(saved);
      });
  };
}