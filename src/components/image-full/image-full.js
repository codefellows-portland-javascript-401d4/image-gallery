import template from './image-full.html';

export default {
  template,
  bindings: {
    image: '='
  },
  controller
};

function controller() {
  this.selected = 'full';
}
