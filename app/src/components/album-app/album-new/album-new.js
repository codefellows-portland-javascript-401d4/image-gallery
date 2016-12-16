import template from './album-new.html';
import styles from './album-new.scss';

export default {
    template,
    bindings: {
        add: '<',
        loading: '='
    },
    controller
};

function controller() {
    this.styles = styles;
    
    this.reset = () => {
        this.name = '';
    };
    
    this.addAlbum = () => {
        this.add({
            name: this.name
        });
        this.reset();
    };
};