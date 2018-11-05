import template from './image-detail.html';
import styles from './image-detail.scss';

export default {
    template,
    bindings: {
        images: '=',
        // view: '@',
        remove: '<'
    },
    require: {
        parent: '^imageApp'
    },
    controller
};

function controller() {
    this.styles = styles;
}