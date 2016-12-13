import template from './app.html';

export default {
  template,
  controller,
  controllerAs: 'appCtrl'
};

controller.$inject = ['$state'];

function controller($state) {
  this.seeImages = () => $state.go('images');
}