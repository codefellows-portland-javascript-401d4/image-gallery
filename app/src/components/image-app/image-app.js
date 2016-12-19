import template from './image-app.html';
import styles from './image-app.scss';

export default {
  template,
  controller
};

controller.$inject = ['imageService', 'albumService'];

function controller(images, albums) {
  albums.get().then(albums => {
    this.albums = albums;
  });

  images.get().then(images => {
    this.img = images;
  });
  this.view = 'detail';
  this.styles = styles;

  this.addImage = image => {
    images.add(image)
      .then(saved => {
        this.img.push(saved);
      });
  };

  this.addAlbum = album => {
    albums.add(album)
      .then(saved => {
        this.albums.push(saved);
      });
  };
}