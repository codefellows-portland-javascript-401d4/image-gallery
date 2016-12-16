import template from './album-contents.html';
import styles from './album-contents.scss';

export default {
    template,
    bindings: { 
        id: '<',
        view: '<' 
    },
    controller
};

controller.$inject = ['albumService', 'imageService'];

function controller(albums, images) {

    this.styles = styles;

    this.$onInit = () => {
        albums.get(this.id).then(album => {
            this.album = album;
        });
    };

    this.uiOnParamsChanged = params => {
        console.log(params);
        this.view = params.view;
    };

    this.updatePage = () => {
        $state.go('^');
    };

    this.addImage = album => {
        images.add({
            title: this.title,
            url: this.url,
            description: this.description,
            album: this.album._id
        })
            .then(saved => {
                // push to in-memory array
                this.albums.push(saved);
            });
    };

    this.removeImage = image => {
        images.remove(image._id)
        .then(() => {
            const index = this.images.indexOf(image);
            if (index > -1) this.images.splice(index, 1);
        });
    };

}
