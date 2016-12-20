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
    
    // this.$onInit ensures that on later versions    
    // of angular this.id is not undefined
    this.$onInit = () => {
        albums.get(this.id).then(album => {
            this.album = album;
        });
    };

    this.uiOnParamsChanged = params => {
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
                //update local album contents
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
