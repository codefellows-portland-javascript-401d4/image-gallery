import template from './image-full.html';
import styles from './image-full.scss';

export default {
    template,
    bindings: {
        images: '<'
    },
    controller() {
        this.styles = styles;
    }
};