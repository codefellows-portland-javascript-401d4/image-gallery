import template from './image-add.html';

export default {
  template,
  bindings: {
    albums: '=',
    images: '='
  },
  controller
};

controller.$inject = ['imageService'];

function controller(imageService) {

  this.selected = 'albums';
  this.images = [];

  this.reset = () => {
    this.title = '';
    this.url = '';
    this.description = '';
    this.selected = 'albums';
  };

  this.addImage = () => {
    imageService.add({
      title: this.title,
      url: this.url,
      description: this.description,
      album: this.selected
    })
      .then(saved => {
        this.images.push(saved);
      });
    this.reset();

  };
}