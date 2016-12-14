import template from './gallery-views.html';

export default {
  template,
  controller
};

function controller() {
  this.views = ['Thumbnail', 'Full Image', 'Link'];
}