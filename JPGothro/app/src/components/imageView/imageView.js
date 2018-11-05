
import template from './imageView.html';
import styles from './imageView.scss';

export default {
    template,
    bindings: {
        images: '=',
        remove: '<'
    },
    controller
};

function controller () {
    this.styles = styles;

    this.trash = (image) => {
        this.remove(image);
    };
};
