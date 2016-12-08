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

    this.remove = image => {
        this.loading = true;
        imageService
            .remove(image._id)
            .then(() => {
                this.loading = false;
                const index = this.images.indexOf(image);
                if (index > -1) this.images.split(index, 1);
            });
    };

    this.add = image => {
        this.loading = true;
        imageService
            .add(image)
            .then(saved => {
                this.loading = false;
                this.images.push(saved);
            });
    };
};