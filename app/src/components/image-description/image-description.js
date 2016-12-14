import template from './image-description.html';
import styles from './image-description.scss';

export default {
    template,
    bindings: {
        image: '='
    },
    controller() {
        this.styles = styles;
    }
};
