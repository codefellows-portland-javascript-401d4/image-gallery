import template from './spider-detail.html';

export default {
  template,
  bindings: {
    spider: '=',
    remove: '<'
  },
  controller
};

function controller() {
  this.delete = () => {
    this.remove(this.spider);
  };
}
