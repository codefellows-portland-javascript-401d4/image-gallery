import template from './image-detail.html';
import styles from './image-detail.scss';

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
