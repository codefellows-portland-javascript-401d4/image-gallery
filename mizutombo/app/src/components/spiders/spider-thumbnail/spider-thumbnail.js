import template from './spider-thumbnail.html';

export default {
  template,
  bindings: {
    spider: '=',
    remove: '<'
  },
  controller
};

function controller() {
  // this.styles = styles;

  this.delete = () => {
    this.remove(this.spider);
  };
}
