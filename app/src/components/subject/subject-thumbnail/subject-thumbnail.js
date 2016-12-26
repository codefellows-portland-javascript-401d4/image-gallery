import template from './subject-thumbnail.html';
import styles from './subject-thumbnail.scss';

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
