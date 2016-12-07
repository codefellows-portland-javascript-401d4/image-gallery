import template from './parent-comp.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller () {
  this.data = [
    {title: 'Bunny Photo',
      description: 'Picture of a cute bunny!',
      url: 'f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      fullImage: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      thumbnail: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'}
  ];
}