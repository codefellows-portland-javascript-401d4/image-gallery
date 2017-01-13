import template from './image-info.html';

export default {
  template,
  bindings: {
    img: '=',
    remove: '<'
  },
  controller
};

function controller() {
  this.delete = img => {
    this.remove(img);
  };
}