import template from './image-app.html';
import styles from './image-app.css';
export default {
    template,
    controller,
    controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller(images) {
    this.loading = true;
    this.styles = styles;

    images.get().then(images => {
        this.loading = false;
        this.images = images;
    });
    
}