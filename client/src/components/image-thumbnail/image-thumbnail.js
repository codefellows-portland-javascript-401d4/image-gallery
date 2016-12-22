import template from './image-thumbnail.html';
import styles from './image-thumbnail.scss';

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
