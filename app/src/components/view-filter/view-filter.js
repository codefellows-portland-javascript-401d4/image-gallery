import template from './view-filter.html';

export default {
    template,
    bindings: {
        view: '='
    },
    controller() {
        this.view = '';

        this.changeView = view => {
            this.view = view;
            console.log(this.view);
        };
    }
};