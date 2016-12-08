import template from './deleteImage.html';

export default {
  template,
  bindings: {
    image: '=',
    remove: '<'
  },
  controller,
  controllerAs: 'deleteCtrl'
};

function controller() {
  this.delete = () => {
    this.remove(this.image);
  };
}