import template from './image-options.html';
import styles from './image-options.css';

export default {
    template,
    bindings: {
        image: '=',
        viewoptions: '<',
        view: '<'
    },
    controller
};

function controller() {
    this.styles = styles;
};