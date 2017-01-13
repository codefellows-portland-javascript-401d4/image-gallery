import template from './nav.html';
import styles from './nav.scss';

export default {
  template,
  styles,
  controller
};

controller.$inject = ['$state'];

function controller($state) {
  this.styles = styles;

  this.imageState = () => $state.go('images');
}