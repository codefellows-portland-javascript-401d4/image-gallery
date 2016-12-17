import template from './image-detail.html';
import styles from './image-detail.css';

export default {
    template,
    bindings: {
        image: '=',
        view: '@',
    },
    controller
};

function controller() {
    this.styles = styles;
    this.view = '';
}