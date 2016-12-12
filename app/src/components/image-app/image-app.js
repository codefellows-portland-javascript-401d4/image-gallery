import template from './image-app.html';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];
function controller(images) {
  images.get().then(images => {
    this.img = images[0];
  });
}