import template from './image-all.html';
import styles from './image-all.css';

export default {
    bindings: {
        images: '<'
    },
    template,
    controller,    
};

function controller() {
    this.styles = styles;
}
