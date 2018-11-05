import template from './image-gallery.html';
import styles from './image-gallery.scss';

export default {
    template,
    bindings: {
        images: '=',
        remove: '<'
    },
    require: {
        parent: '^imageApp'
    },
    controller
};

function controller() {
    this.styles = styles;
};