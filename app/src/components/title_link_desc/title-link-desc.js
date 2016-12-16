import template from './title-link-desc.html';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(images) {
  images.get().then(images => {
    this.images = images;
  });

  this.remove = image => {
    images.remove(image._id)
      .then(() => {
        const index = this.images.indexOf(image);
        if(index > -1) this.images.splice(index, 1);
      });
  };
}