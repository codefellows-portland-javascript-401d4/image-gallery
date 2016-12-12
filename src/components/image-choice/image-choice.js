import template from './image-choice.html';

export default {
  template,
  controller
};

function controller() {
  this.choices = [
    {name: 'Gallery', value: 'gallery'},
    {name: 'Thumbnail', value: 'thumbnail'},
    {name: 'Text View', value: 'view'}
  ];

  this.myChoice = this.choices[2];

  this.image = 
  {
    title: 'One Amazing Dragon', 
    url: 'http://cdn.playbuzz.com/cdn/845ff10a-f092-4740-b866-36d9e705cd95/79d156c0-83f3-4af2-826e-f963b2283042.jpg',
    description: 'Fire breathing red dragon.'
  };
}