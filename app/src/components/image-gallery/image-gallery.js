import template from './image-gallery.html';
import style from './image-gallery.scss';

export default {
  bindings: {
    image: '=',
    display: '<'
  },
  controller,
  template
};

function controller() {
  this.style = style;
}