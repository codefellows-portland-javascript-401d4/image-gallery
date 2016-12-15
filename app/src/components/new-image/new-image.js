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
    this.url = '';
    this.imageTitle = '';
    this.imageDescription = '';
  };

  // this.reset();

  this.addNew = () => {
    this.add({
      url: this.url,
      imageTitle: this.imageTitle,
      imageDescription: this.imageDescription
    });
    this.reset();
  };

}
