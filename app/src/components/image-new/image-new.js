import template from './image-new.html';
import style from './image-new.scss';

export default {
    template,
    bindings: {
        add: '<'
    },
    controller
};

function controller() {

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
            url: this.url
        });
        this.reset();
    };
}