import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    album: '<',
    albums: '<'
  },
  controller,
  controllerAs: 'imagesCtrl'
};

controller.$inject = ['imageService', 'albumService'];

function controller(imageService, albumService) {
  this.styles = styles;

  this.$onInit = () => {
    this.images = this.album.images;
  };

  this.removeImage = image => {
    imageService.remove(image._id)
      .then(() => {
        const idx = this.images.indexOf(image);
        if(idx > -1) this.images.splice(idx, 1);
      });
  };

  this.addImage = image => {
    imageService.addImage(image)
      .then(saved => {
        const albumId = saved.album;
        if(albumId === this.album._id) {
          console.log('images cont', this.images);
          this.images.push(saved);
          console.log('images cont', this.images);
        } else {
          const foundAlbum = this.albums.find(album => album._id === albumId);
          if(foundAlbum) {
            console.log('old albums image cont', this.albums);
            foundAlbum.images.push(saved);
            console.log('old albums image cont', this.albums);
          } else {
            albumService.get(albumId)
              .then(saved => {
                console.log('new albums image cont', this.albums);
                this.albums.push(saved);
                console.log('new albums image cont', this.albums);
              });
          }
        }
      });
  };

  this.imageType = 'text';
}