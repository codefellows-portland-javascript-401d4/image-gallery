import template from './image-detail.html';

export default {
    template,
    bindings: {
        image: '=',
        remove: '<'
    },
    controller
};

controller.$inject = ['albumService'];

function controller() {

    this.delete = () => {
        this.remove(this.image);
    };

}