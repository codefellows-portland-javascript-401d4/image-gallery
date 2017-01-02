import template from './new-image.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

controller.$inject = ['albumService'];

function controller(albumService) {

  this.reset = () => {
    this.url = '';
    this.imageTitle = '';
    this.imageDescription = '';
    this.album = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      url: this.url,
      imageTitle: this.imageTitle,
      imageDescription: this.imageDescription,
      album: this.album
    });
    this.reset();
  };

  albumService.get().then(albums => {
    this.albums = albums;
  });

}
