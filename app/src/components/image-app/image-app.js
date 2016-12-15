import template from './image-app.html';
import styles from './image-app.scss';

export default {
    template,
    controller,
    controllerAs: 'app'
};

controller.$inject = ['imageService', 'albumService'];

function controller(imageService, albumService) {
    this.styles = styles;
    this.loading = true;
    this.image = '';
    this.album = '';

    this.$onInit = () => {
        imageService
            .get()
            .then(images => {
                this.images = images;
                this.loading = false;
            });
        albumService
            .getAll()
            .then(albums => {
                this.albums = albums;
            });
    };

    this.viewOptions = ['', 'detail','thumbnail','gallery'];
    this.view = '';

    this.remove = image => {
        this.loading = true;
        imageService
            .remove(image._id)
            .then(() => {
                this.loading = false;
                const index = this.images.indexOf(image);
                if (index > -1) this.images.splice(index, 1);
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

    this.nullImage = () => {
        this.image = '';
    };

    this.nullAlbum = () => {
        this.album = '';
    };
};