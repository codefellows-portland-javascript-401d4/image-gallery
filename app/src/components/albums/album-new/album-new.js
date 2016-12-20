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
        this.description = '';
    };

    this.reset();

    this.addNewAlbum = () => {
        this.add({
            name: this.name,
            description: this.description
        });
        this.reset();
    };
}