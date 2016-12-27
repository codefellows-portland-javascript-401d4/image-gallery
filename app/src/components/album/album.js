import template from './album.html';
import styles from './album.scss';

export default {
    template,
    bindings: {
        album: '<'
    },
    controller   
};

controller.$inject = ['imageService', '$state'];

function controller(imageService, $state) {

    this.styles = styles;

    this.setDisplay = name => {
        const parts = $state.current.name.split('.');
        parts[parts.length-1] = name;
        $state.go(parts.join('.'));
    };

    this.add = image => {
        const album = this.album;
        image.album = album._id;
        imageService.add(image)
            .then(saved => {
                album.images.push(saved);
            })
            .catch(err => console.error(err));
    };

    this.remove = image => {
        imageService.remove(image._id)
            .then(() => {
                const images = this.album.images;
                const index = images.indexOf(image);
                if(index < 0) return;
                images.splice(index, 1);
            })
            .catch(err => console.error(err));
    };
}