import template from './image-app.html';

export default {
  template,
  controller
};

function controller() {
  this.img = {
    title: 'cute bunny',
    description: 'A cute bunny that is small',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
  };

  // this.view = [
  //   {name: 'detail'},
  //   {name: 'thumbnail'},
  //   {name: 'gallery'}
  // ];
}