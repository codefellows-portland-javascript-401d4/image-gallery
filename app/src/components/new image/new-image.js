import template from './new-image.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

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
      desc: this.desc
    });
    this.reset();
  };
}