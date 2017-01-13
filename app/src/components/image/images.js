import template from './images.html';

export default {
  template,
  controller
}; 

controller.$inject = ['imageService', 'albumService'];

function controller(imageService, albumService){
  this.images = [];
  this.albums = [];

  this.$onInit = () => {
    imageService.get()
      .then(images => {
        this.images = images;
      });
    albumService.get()
      .then(albums => {
        this.albums = albums;
      });
  };


}