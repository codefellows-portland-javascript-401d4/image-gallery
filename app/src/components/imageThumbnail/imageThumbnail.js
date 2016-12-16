
import template from './imageThumbnail.html';
import styles from './imageThumbnail.scss';

export default {
    template,
    bindings: {
        images: '='
    },
    controller (){this.styles = styles;}
};
