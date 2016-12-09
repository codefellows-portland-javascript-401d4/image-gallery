import template from './image-app.html';
import style from './image-app.css';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller() {
  this.style = style;
  this.image = {
    title: 'Calico bunny',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    description: 'cute cuddly-wuddly bunny.'
  };
}