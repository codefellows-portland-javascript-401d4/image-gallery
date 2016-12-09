import template from './image-list.html';

export default {
  template,
  bindings: {
    image: '=',
    remove: '<',
    toggleView: '<'
  },
  controller,
  controllerAs: '$list'
};

function controller() {
  this.delete = () => {
    this.remove(this.image);
  };
}