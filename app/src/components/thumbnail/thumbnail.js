import template from './thumbnail.html';
import styles from './thumbnail.scss';

export default {
    template,
    bindings: {
        image: '='
    },
    controller
    
};

function controller() {
    this.styles = styles;
}