import template from './image-new.html';
import styles from './image-new.scss';

export default {
    template,
    bindings: {
        add: '<',
        albumoptions: '<'
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
            title : this.title,
            description: this.description,
            url: this.url,
            category: this.category.name,
        });
        this.reset();
    }; 
};