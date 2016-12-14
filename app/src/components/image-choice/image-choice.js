import template from './image-choice.html';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(imageService) {
  this.choices = [
    {name: 'Gallery', value: 'gallery'},
    {name: 'Thumbnail', value: 'thumbnail'},
    {name: 'Text View', value: 'view'}
  ];

  this.myChoice = this.choices[2];

  this.images= [];

  imageService.get()
    .then(images => {
      this.images = images;
    });

}