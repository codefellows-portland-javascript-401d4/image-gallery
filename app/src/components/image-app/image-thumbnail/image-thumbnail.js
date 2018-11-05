import template from './image-thumbnail.html';
import styles from './image-thumbnail.scss';

export default {
    template,
    bindings: {
        images: '=',
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