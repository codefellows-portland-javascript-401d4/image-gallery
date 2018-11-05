import template from './album-new.html';

export default {
  template,
  bindings: {
    // album: '=',
    add: '<'
  },
  controller
};

function controller() {

  this.reset = () => {
    this.name = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      name: this.name
    });
    this.reset();
  };

}
