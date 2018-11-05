import template from './new-image.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller,
  controllerAs: 'app'
};

function controller () {

  this.reset = () => {
    this.title = '';
    this.description = '';
    this.url = '';
    this.fullImage = '';
    this.thumbnail = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      title: this.title,
      description: this.description,
      url: this.url,
      fullImage: this.fullImage,
      thumbnail: this.thumbnail
    });
    this.reset();
  };
}