import template from './albumOverview.html';

export default {
  template,
  bindings: {
    albums: '<'
  },
  controller,
  controllerAs: 'overviewCtrl'
};

controller.$inject = ['albumService'];

function controller() {}