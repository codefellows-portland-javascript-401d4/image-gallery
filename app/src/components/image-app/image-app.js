import template from './image-app.html';

export default {
  template,
  controller
};

controller.$inject = ['$state'];

function controller($state) {
  this.imageState = () => $state.go('images');
}
