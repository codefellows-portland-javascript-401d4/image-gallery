import template from './image-gallery.html';
import styles from './image-gallery.css';

export default {
    template,
    bindings: {
        bunny: '='
    },
    controller
};

function controller() {
    this.styles = styles;
};