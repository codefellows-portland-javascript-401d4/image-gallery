import template from './gallery.html';
import styles from './gallery.scss';

export default {
  template,
  bindings: {
    images: '<',
    albums: '<'
  },
  controller,
  controllerAs: '$gallery'
};

controller.$inject = ['imageService', 'albumService'];

function controller(imageService, albumService) {
  this.styles = styles;

  this.loading = true;

  // imageService.getAll().then(images => {
  //   this.loading = false;
  //   this.images = images;
  // });

  // albumService.getAll().then(albums => {
  //   this.loading = false;
  //   this.albums = albums;
  // });

  this.addImage = image => {
    this.loading = true;
    imageService.addImage(image)
      .then(saved => {
        this.loading = false;
        this.images.push(saved);
      });
  };

  this.addAlbum = album => {
    this.loading = true;
    albumService.addAlbum(album)
      .then(saved => {
        this.loading = false;
        this.albums.push(saved);
      });
  };

  this.toggleAlbum = name => {
    this.view = name;
  };

}