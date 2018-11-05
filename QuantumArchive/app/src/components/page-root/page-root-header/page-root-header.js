import template from './page-root-header.html';
import styles from './page-root-header.scss';

export default {
    template,
    transclude: {
        links: '?headerLinks'
    },
    controller
};

function controller() {
    this.styles = styles;
};