
import template from './imageGallery.html';
import styles from './imageGallery.scss';

export default {
    template,
    bindings: {
        images: '='
    },
    controller () {this.styles = styles;}
};
