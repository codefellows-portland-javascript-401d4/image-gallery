import template from './newImage.html';

export default {
  template,
  bindings: {
    parentCompAddImage: '<'
  },
  controller,
  controllerAs: 'newImgCtrl'
};

function controller() {
  this.reset = () => {
    this.title = '';
    this.description = '';
    this.url = '';
    this.albumName = '';
  };

  this.reset();

  this.add = () => {
    this.parentCompAddImage({
      title: this.title,
      description: this.description,
      url: this.url,
      name: this.albumName
    });

    this.reset();
  };
}