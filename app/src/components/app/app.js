import template from './app.html';
import styles from './app.scss';

export default {
  template,
  controllerAs: 'app'
};

controller.$inject = ['$state'];

function controller($state) { // eslint-disable-line
  this.styles = styles;
  // this.gotoSpiders = () => $state.go('spiders');
}
