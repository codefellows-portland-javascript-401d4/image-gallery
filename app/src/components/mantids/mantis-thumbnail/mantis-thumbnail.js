import template from './mantis-thumbnail.html';
import styles from './mantis-thumbnail.scss';

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
