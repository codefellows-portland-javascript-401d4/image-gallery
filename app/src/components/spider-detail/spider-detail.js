import template from './spider-detail.html';
import styles from './spider-detail.scss';

export default {
  template,
  bindings: {
    spider: '=',
    remove: '<'
  },
  controller
};

function controller() {
  this.styles = styles;
  this.delete = () => {
    this.remove(this.spider);
  };
}
