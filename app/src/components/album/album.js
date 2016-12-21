import template from './album.html';

export default {
  template,
  bindings: {
    album: '<',
    albumImages: '<'
  },
  controller,
  controllerAs: '$album'
};

function controller() {
  this.uiOnParamsChanged = params => {
    this.view = params.view;
  };
}