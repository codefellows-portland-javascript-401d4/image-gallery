import template from './album-delete.html';

export default {
  template,
  controller,
  bindings: {
    albums: '='
  }
};

controller.$inject = ['albumService'];

function controller(albumService){

  this.trash = (album) => {
    albumService.remove(album)
      .then(() => {
        albumService.get()
          .then(albums => this.albums = albums);
      });
  };
}