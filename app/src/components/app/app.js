import template from './app.html';
import './app.scss';

export default {
  template,
  controller
};

controller.$inject = ['$state'];

function controller($state) {
  this.gotoImages = () => $state.go('images');
}
