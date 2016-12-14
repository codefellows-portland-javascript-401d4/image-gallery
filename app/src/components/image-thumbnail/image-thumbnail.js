import template from './image-thumbnail.html';
import styles from './image-thumbnail.scss';

export default {
    template,
    bindings: {
        image: '='
    },
    controller() {
        this.styles = styles;
    }
};