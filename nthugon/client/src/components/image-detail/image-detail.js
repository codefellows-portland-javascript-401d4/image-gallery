import template from './image-detail.html';
import styles from './image-detail.css';

export default {
    bindings: {
        image: '<'
    },
    template,
    controller,    
};

function controller() {
    this.styles = styles;
}


