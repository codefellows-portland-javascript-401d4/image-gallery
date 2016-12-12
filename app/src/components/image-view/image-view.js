import template from './image-view.html';

export default {
  template, 
  bindings: {
    image: '=',
    remove: '<'
  },
  controller
};

function controller () {

  this.trash = (image) => {
    this.remove(image);
  };
}