import template from './image-gallery.html';
import style from './image-gallery.css';

export default {
  bindings: {
    image: '<'
  },
  controller,
  template
};

function controller() {
  this.style = style;
}