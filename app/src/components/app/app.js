import template from './app.html';

export default {
  template,
  controllerAs: 'app'
};

controller.$inject = ['$state'];

function controller($state) {
  this.gotoSpiders = () => $state.go('spiders');
}
