import template from './select-menu.html';

export default {
  template,
  controller,
  bindings: {
    album: '<',
    images: '='
  }
};

function controller() {
  this.views = ['Thumbnail', 'Full Image', 'Link'];
}