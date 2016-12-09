import template from './new-image.html';
import styles from  './new-image.css';

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
        this.url = '';
        this.description = '';
    };

    this.reset();

    this.addNew = () => {
        this.add({
            title: this.title,
            url: this.url,
            description: this.description
        });
        // clear out controls so
        // next pirate can be added
        this.reset();
    };
}
