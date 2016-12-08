import template from './image-app.html';

export default {
    template,
    controller,
    controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller(imageService) {
    
    this.loading = true;

    imageService
        .get()
        .then(images => {
            this.images = images;
            this.loading = false;
        });

    this.viewOptions = ['detail','thumbnail','gallery'];
    this.view = '';
};