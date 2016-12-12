import template from './gallery-app.html';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(imgSvc) {
  imgSvc.get()
    .then(images => {
      this.img = images[0];
    });
}