import template from './image-new.html';
import styles from './image-new.scss';

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
        this.title = '';
        this.description = '';
        this.url = '';
    };

    this.reset();

    this.addNew = () => {
        this.add({
            title: this.title,
            description: this.description,
            url: this.url,
            album: this.album
        });
        this.reset();
    };
}