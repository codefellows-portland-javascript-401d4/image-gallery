import template from './mantis-image.html';
import styles from './mantis-image.scss';

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
