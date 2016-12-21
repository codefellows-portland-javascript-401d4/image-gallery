import template from './image-description.html';
import styles from './image-description.scss';

export default {
    template,
    bindings: {
        images: '<'
    },
    controller() {
        this.styles = styles;
    }
};
