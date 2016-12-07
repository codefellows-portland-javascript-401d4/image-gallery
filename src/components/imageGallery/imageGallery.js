
import template from './imageGallery.html';
import styles from './imageGallery.css';

export default {
    template,
    bindings: {
        image: '='
    },
    controller () {this.styles = styles;}
};
