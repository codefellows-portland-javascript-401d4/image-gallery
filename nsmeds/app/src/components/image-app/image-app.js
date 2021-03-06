import template from './image-app.html';

export default {
    template,
    controller
};

controller.$inject = ['imageService'];

function controller(images) {
    images.get().then(images => {
        this.images = images;
    });

    this.add = image => {
        images.add(image)
            .then(saved => {
                this.images.push(saved);
            });
    };

    this.remove = image => {
        images.remove(image._id)
            .then(() => {
                const index = this.images.indexOf(image);
                if (index > -1) this.images.splice(index, 1);
            });
    };

    this.selected = 'detail';
}