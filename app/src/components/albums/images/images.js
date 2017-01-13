import template from './images.html';
import styles from './images.scss';

export default {
  template,
  controller
};

controller.$inject = ['$state'];

function controller($state) {
  this.styles = styles;
  this.imageState = () => $state.go('images');
}