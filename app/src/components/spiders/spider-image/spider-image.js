import template from './spider-image.html';

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
