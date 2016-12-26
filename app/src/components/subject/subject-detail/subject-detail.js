import template from './subject-detail.html';
import styles from './subject-detail.scss';

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
