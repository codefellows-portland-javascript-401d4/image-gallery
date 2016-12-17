import template from './image-full.html';

export default {
  template,
  bindings: {
    image: '=',
    remove: '<',
    toggleView: '<'
  },
  controller,
  controllerAs: '$full'
};

function controller() {
}