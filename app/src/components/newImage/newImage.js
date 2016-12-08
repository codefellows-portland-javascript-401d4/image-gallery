import template from './newImage.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller,
  controllerAs: 'newImgCtrl'
};

function controller() {
  this.reset = () => {
    this.title = '';
    this.description = '';
    this.url = '';
  };

  this.reset();

  this.add = () => {
    this.addImage({
      title: this.title,
      description: this.description,
      url: this.url
    });

    this.reset();
  };
}