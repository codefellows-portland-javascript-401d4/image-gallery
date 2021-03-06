import template from './image-all-detail.html';
import styles from './image-all-detail.css';

export default {
    bindings: {
        image: '=',
        remove: '<'
    },
    template,
    controller,    
};

function controller() {
    this.styles = styles;
    this.delete = () => {
        this.remove(this.image);
    };
}
