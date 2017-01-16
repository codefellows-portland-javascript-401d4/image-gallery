import template from './main-nav.html';
import styles from './main-nav.scss';

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
