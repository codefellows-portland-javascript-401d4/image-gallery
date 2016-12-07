import template from './image-list.html';

export default {
  template,
  bindings: {
    image: '=',
    remove: '<'
  },
  controller
};

function controller() {
  this.delete = () => {
    this.remove(this.image);
  };
}