import template from './subject-image.html';
import styles from './subject-image.scss';

export default {
  template,
  bindings: {
    subject: '=',
    remove: '<'
  },
  controller
};

function controller() {
  this.styles = styles;

  this.delete = () => {
    this.remove(this.subject);
  };
}
