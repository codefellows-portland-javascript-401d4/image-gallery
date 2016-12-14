import template from './spider-app.html';
import './spider-app.scss';

export default {
  template,
  controller
};

controller.$inject = ['$state'];

function controller($state) {
  this.gotoSpiders = () => $state.go('spiders');
}
