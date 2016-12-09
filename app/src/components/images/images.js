import template from './images.html';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(images) {

  this.loading = true;

  images.get().then(images => {
    this.loading = false;
    this.images = images;
  });
}
