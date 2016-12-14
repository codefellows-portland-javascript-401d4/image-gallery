import template from './image-full.html';
import styles from './image-full.scss';

export default {
    template,
    bindings: {
        image: '='
    },
    controller() {
        this.styles = styles;
    }
};