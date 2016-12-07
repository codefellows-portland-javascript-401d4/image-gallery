
import template from './imageThumbnail.html';
import styles from './imageThumbnail.css';

export default {
    template,
    bindings: {
        image: '='
    },
    controller (){this.styles = styles;}
};
