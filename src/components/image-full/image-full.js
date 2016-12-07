import template from './image-full.html';

export default {
  template,
  bindings: {
    image: '=',
    remove: '<',
    toggleView: '&'
  },
  controller
};

function controller() {
  this.delete = () => {
    this.remove(this.image);
  };

  this.view = (name) => {
    console.log('in imagefull name=', name);
    this.toggleView(name);
  };
}