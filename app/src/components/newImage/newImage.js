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
    this.addImage({
      title: this.title,
      description: this.description,
      url: this.url,
      albumName: this.albumName
    });

    this.reset();
  };
}