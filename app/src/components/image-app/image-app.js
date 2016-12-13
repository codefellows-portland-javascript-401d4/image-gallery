import template from './image-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller() {
  this.image = {
    url: 'http://4.bp.blogspot.com/-HTvSYzA-pO4/UgQb4Zh_u0I/AAAAAAAAEuI/XwhtogT_1tA/s1600/3+cute2.jpg',
    image_title: 'Little bunny',
    image_description: 'Young little bunny in the grass'
  };
}