
import template from './imageView.html';
import styles from './imageView.css'

export default {
    template,
    bindings: {
        image: '='
    },
    controller () {this.styles = styles;}
};
