import template from './mantis-detail.html';
import styles from './mantis-detail.scss';

export default {
  template,
  bindings: {
    mantis: '=',
    remove: '<'
  },
  controller
};

function controller() {
  this.styles = styles;

  this.delete = () => {
    this.remove(this.mantis);
  };
}
