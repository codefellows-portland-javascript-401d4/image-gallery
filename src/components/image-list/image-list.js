import template from './image-list.html';

export default {
  template,
  bindings: {
    image: '=',
    remove: '<',
    toggleView: '<'
  },
  controller
};

function controller() {
  this.delete = () => {
    this.remove(this.image);
  };

  this.view = (name) => {
    this.toggleView(name);
  };
}