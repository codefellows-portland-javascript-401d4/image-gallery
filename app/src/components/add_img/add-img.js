import template from './add-img.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

function controller() {
  this.addNew = () => {
    this.add({
      name: this.name,
      src: this.src,
      description: this.description
    });
  };
}