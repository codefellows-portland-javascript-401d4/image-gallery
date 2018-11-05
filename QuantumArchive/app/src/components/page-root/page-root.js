import template from './page-root.html';
import styles from './page-root.scss';

export default {
    template,
    controller
};

function controller() {
    this.styles = styles;
};