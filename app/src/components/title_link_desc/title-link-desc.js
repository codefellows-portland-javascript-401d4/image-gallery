import template from './title-link-desc.html';

export default {
  template,
  bindings: {
    bunny: '='
  },
  controller
};

function controller() {
  this.link = {
    src: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
  };
  this.title = 'Cute Bunny Picture';
  this.desc = 'Picture of a cute bunny';
}