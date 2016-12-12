import template from './image-add.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller,
  controllerAs: '$add'
};

function controller() {
  this.reset = () => {
    this.name = '';
    this.description = '';
    this.url = '';
  };

  this.reset();

  this.addOneImage = () => {
    this.add({
      name: this.name,
      description: this.description,
      url: this.url
    });

    this.reset();
  };

}