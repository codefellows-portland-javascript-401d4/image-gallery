import template from './images.html';
import styles from './images.scss';
export default {
    template,
    bindings: {
        images: '<',
        album: '<'
    },
    controller,
    controllerAs: 'app'
};

controller.$inject = ['imageService', '$state'];

function controller(imageService, $state) {

    this.styles = styles;

    this.setView = name => {
        console.log('set view hit');
        const parts = $state.current.name.split('.');
        parts[parts.length - 1] = name;
        const newState = parts.join('.');
        console.log('new state', newState);
        $state.go(newState, {name});
    };

    this.remove = image => {
        this.loading = true;
        imageService.remove(image._id)
            .then(() => {
                this.loading = false;
                const index = this.images.indexOf(image);
                if(index > -1) this.images.splice(index, 1);
            });
    };   
}