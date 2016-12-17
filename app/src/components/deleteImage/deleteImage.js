import template from './deleteImage.html';

export default {
  template,
  bindings: {
    image: '=',
    removeImage: '<'
  },
  controller,
  controllerAs: 'deleteCtrl'
};

function controller() {
  this.delete = () => {
    this.removeImage(this.image);
  };
}