import template from './select-menu.html';

export default {
  template,
  controller
};

function controller() {
  this.views = ['Thumbnail', 'Full Image', 'Link'];
}