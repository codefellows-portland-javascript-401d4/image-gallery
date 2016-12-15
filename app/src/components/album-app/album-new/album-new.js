import template from './album-new.html';
import styles from './album-new.scss';

export default {
    template,
    bindings: {
        add: '<'
    },
    controller
};

function controller() {
    this.styles = styles;
    
    this.reset = () => {
        this.name = '';
    };
    
    this.newAlbum = () => {
        this.add({
            name: this.name
        });
        this.reset();
    };
};