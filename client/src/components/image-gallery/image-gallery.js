import template from './image-gallery.html';
import styles from './image-gallery.scss';

export default {
    bindings: {
        image: '<'
    },
    template,
    controller,    
};

function controller() {
    this.styles = styles;
}
