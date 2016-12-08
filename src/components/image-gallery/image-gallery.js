import template from './image-thumb.html';
import style from './image-thumb.css';

export default {
  bindings: {
    image: '<'
  },
  controller,
  template
}

function controller() {
  this.style = style;
}