import template from './thumbnail-app.html';
import styles from './thumbnail-app.css';

export default {
    template,
    bindings: {
        bunny: '='
    },
    controller
};

function controller() {
    this.styles = styles;
    this.thumbnail = {
        src: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
    };
}