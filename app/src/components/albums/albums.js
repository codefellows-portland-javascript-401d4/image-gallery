import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller
};

controller.$inject = ['albumService', 'imageService'];

function controller (albums, images) {

  this.styles = styles;
  this.loading = true;


  albums.get()
    .then(albums => {
      this.loading = false;
      this.albums = albums;
    });

  this.getAlbum = () => {  
    images.getone(this.selection._id)
      .then(images => {
        this.loading = false;
        this.images = images;
      });
  };

  this.remove = album => {
    this.loading = true;
    albums.remove(album._id)
      .then(() => {
        this.loading = false;
        const index = this.albums.indexOf(album);
        if (index > -1) this.albums.splice(index, 1);
      });
  };

  this.add3 = album => {
    this.loading = true;
    albums.add1(album)
      .then(saved => {
        this.loading = false;
        this.albums.push(saved);
      });
  };
}
