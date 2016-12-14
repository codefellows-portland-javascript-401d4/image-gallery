import template from './image-add.html';

export default {
  template,
  bindings: {
    add:'<'
  },
  controller
};

controller.$inject = ['imageService'];

function controller(imageService) {

  this.reset = () => {
    this.title = '';
    this.url = '';
    this.description = '';
  };

  this.reset();

  this.addImage = () => {
    imageService.add({
      title: this.title,
      url: this.url,
      description: this.description
    })
      .then(saved => this.images.push(saved));
    this.reset();
  };
}