import template from './bunny-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller() {
  this.bunny = {
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Bunny_in_zoo_cropped.jpg',
    image_title: 'Fluffy the bunny',
    image_description: 'This is a close up photo of a little bunny.'
  };
}
