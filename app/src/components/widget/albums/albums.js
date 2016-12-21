import template from './albums.html';

export default {
    template,
    bindings: {
        album: '<'
    },
    controller
};

controller.$inject = ['albumService'];

function controller(albumService) {
    this.loading = true;

    albumService.get().then(albums => {
        this.loading = false;
        this.albums = albums;
    });

    this.add = album => {
        albumService.add(album)
            .then(saved => this.albums.push(saved));
    };

    this.delete = album => {
        albumService.remove(album._id)
            .then(() => {
                const index = this.albums.indexOf(album);
                if(index > -1) this.albums.splice(index, 1);
            });
    };
}