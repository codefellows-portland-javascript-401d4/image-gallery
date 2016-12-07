import template from './image-detail.html';
import styles from './image-detail.css';

export default {
    template,
    bindings: {
        bunny: '='
    },
    controller
};

function controller() {
    this.styles = styles;
}