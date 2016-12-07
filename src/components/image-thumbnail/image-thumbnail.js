import template from './image-thumbnail.html';
import styles from './image-thumbnail.css';

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