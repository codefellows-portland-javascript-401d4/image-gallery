import template from './image-choice.html';

export default {
  template,
  controller,
  bindings: {
    images: '<'
  }
};

function controller() {
  this.choices = [
    {name: 'Gallery', value: 'gallery'},
    {name: 'Thumbnail', value: 'thumbnail'},
    {name: 'Text View', value: 'view'}
  ];

  this.myChoice = this.choices[1];

}