import template from './image-all-detail.html';

export default {
    bindings: {
        image: '=',
        remove: '<'
    },
    template,
    controller,    
};

function controller() {
    this.delete = () => {
        this.remove(this.image);
    };
}
