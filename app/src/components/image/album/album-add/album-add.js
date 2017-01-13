import template from './album-add.html';

export default {
  template, 
  controller, 
  bindings: {
    albums: '<'
  }
};

controller.$inject = ['albumService'];

function controller(albumService) {

  this.reset = () => {
    this.name = '';
    this.type = '';
    this.description = '';
  };

  this.reset();

  this.addAlbum = () => {
    albumService.add({
      name: this.name,
      type: this.type,
      description: this.description,
    })
      .then(saved => this.albums.push(saved));
    this.reset();

  };
}