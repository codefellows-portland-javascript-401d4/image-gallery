import template from './new-album.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

function controller() {

  this.reset = () => {
    this.name = '';
    this.cover = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      name: this.name,
      cover: this.cover
    });
    this.reset();
  };
}