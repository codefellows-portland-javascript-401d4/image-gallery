import template from './image-gallery.html';
import styles from './image-gallery.scss';

export default {
    template,
    bindings: {
        image: '='
    },
    controller
};

function controller() {
    this.styles = styles;
};