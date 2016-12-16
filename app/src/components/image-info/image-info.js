import template from './image-info.html';

export default {
  template,
  bindings: {
    img: '=',
    remove: '<'
  },
  controller
  // controllerAs: 'app'
};

function controller() {
  this.delete = () => {
    this.remove(this.img);
  };
}