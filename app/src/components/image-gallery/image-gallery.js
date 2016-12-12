import template from './image-gallery.html'; 
import styles from './image-gallery.css';

export default {
  template,
  bindings: {
    image: '='
  },
  controller (){this.styles = styles;}
};