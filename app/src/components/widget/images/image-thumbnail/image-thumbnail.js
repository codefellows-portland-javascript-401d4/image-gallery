import template from './image-thumbnail.html';
import styles from './image-thumbnail.scss';

export default {
    template,
    bindings: {
        images: '=',
        remove: '<'
    },
    controller
};

function controller() {
    this.styles = styles;

    this.delete = () => {
        this.remove(this.image);
    };
}