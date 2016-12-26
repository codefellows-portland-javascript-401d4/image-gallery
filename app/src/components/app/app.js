import template from './app.html';
import styles from './app.scss';

export default {
  template,
  controller
};

controller.$inject = ['$state'];

function controller($state) {
  this.styles = styles;
  this.imageState = () => $state.go('images');
}