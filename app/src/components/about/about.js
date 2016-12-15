
export default {
  bindings: {
    view: '@'
  },
  controller,
  template: '<ui-view></ui-view>'
};

function controller() {
  this.view = 'about';
}