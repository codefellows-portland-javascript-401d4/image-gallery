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

    this.reset = () => {
        this.title = '';
        this.url = '';
        this.description = '';
    };

    this.reset();

    this.$onInit = () => {
        albums.get(this.id).then(album => {
            this.album = album;
        });
    };

    this.fetchAlbum = () => {
        albums.get(this.id).then(album => {
            this.album = album;
            console.log('new album contents: ', this.album);
        });
    };

    this.uiOnParamsChanged = params => {
        console.log(params);
        this.view = params.view;
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
                this.album.images.push(saved);
            })
            .then(this.reset());
    };

    this.removeImage = image => {
        images.remove(image._id)
        .then(() => {
            const index = this.album.images.indexOf(image);
            if (index > -1) this.album.images.splice(index, 1);
        });
    };

}
