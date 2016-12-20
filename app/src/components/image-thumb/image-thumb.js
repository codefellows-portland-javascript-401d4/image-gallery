import template from './image-thumb.html';
import style from './image-thumb.scss';

export default {
  bindings: {
    image: '<',
    display: '<'
  },
  controller,
  template
};

function controller() {
  this.style = style;
}