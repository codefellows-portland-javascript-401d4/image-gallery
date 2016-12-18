import template from './newImage.html';

export default {
  template,
  bindings: {
    addImage: '<'
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
    this.addImage({name: this.albumName}, {
      title: this.title,
      description: this.description,
      url: this.url
    });

    this.reset();
  };
}