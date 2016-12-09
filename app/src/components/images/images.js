import template from './images.html';

export default {
  template,
  controller
};

controller.inject = ['imageService'];

function controller(images) {

  images.get().then(images => {
    this.images = images;
  });
}
