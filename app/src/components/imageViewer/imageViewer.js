import template from './imageViewer.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller() {
  this.image = {
    title: 'A cute bunny.',
    description: 'See above.',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
  };

  this.choices = ['full', 'thumbnail', 'text'];

  this.chosenOne = this.choices[0];
}