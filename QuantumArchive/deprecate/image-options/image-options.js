import template from './image-options.html';
import styles from './image-options.scss';

export default {
    template,
    bindings: {
        image: '=',
        viewoptions: '<',
        view: '<',
        del: '<'
    },
    controller
};

function controller() {
    this.styles = styles;
    this.remove = () => {
        this.del(this.image);
    };
};