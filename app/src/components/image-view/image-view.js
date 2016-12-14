import template from './image-app.html';

export default {
  template,
  controller
};

function controller() {
  this.image = {
    title: 'Puppy',
    description: 'Baby Australian Cattle Dog',
    url: 'http://i.imgur.com/EeSB99q.jpg'
  };
}
