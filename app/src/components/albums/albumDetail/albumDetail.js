import template from './albumDetail.html';

export default {
  template,
  bindings: {
    albums: '<'
  },
  controller,
  controllerAs: 'albumDetailCtrl'
};

controller.$inject = ['albumService'];

function controller() {
}