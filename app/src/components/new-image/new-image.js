import template from './new-image.html';

export default {
  template,
  bindings: {
    add: '<',
    albumId: '<'
  },
  controller,
  controllerAs: 'ima'
};

controller.$inject = ['imageService'];

function controller() {

  this.reset = () => {
    this.title = '';
    this.url = '';
    this.desc = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      title: this.title,
      url: this.url,
      desc: this.desc,
      album: this.albumId
    });
    this.reset();
  };
}