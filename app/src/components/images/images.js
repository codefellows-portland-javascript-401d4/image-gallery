// "Images" page ...

import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    albumId: '<',
    images: '<'
  },
  controller,
  controllerAs: 'imagesMain'
};

controller.$inject = ['imageService', 'albumService'];

function controller(images, albums) {

  this.styles = styles;
  this.viewSelect = ['Detail', 'Thumbnail', 'Fullsize'];
  this.viewSelect = 'Thumbnail';

  this.loading = true;

  albums.get()
    .then (returnAlbums => {
      this.loading = false;
      this.albumList = returnAlbums;
    });

  this.add = image => {
    this.loading = true;

    let albumLookup = {};
    this.albumList.forEach((album) => {
      albumLookup[album.name] = album._id;
    });

    if (albumLookup[image.album]) {
      image.album = albumLookup[image.album];
      images
        .add(image)
        .then(savedImage => {
          this.loading = false;
          this.images.push(savedImage);
        });
    }
    else {
      albums
        .add({name: image.album})
        .then(addAlbum => {
          this.albumList.push(addAlbum);
          image.album = addAlbum._id;
          images.add(image)
            .then(savedImage => {
              this.loading = false;
              this.images.push(savedImage);
            });
        });
    }
  };

  this.remove = image => {
    this.loading = true;
    images.remove(image._id)
      .then(() => {
        this.loading = false;
        // after server has updated data, modify in-memory array
        const index = this.images.indexOf(image);
        if (index > -1) this.images.splice(index, 1);
      });
  };

  this.refreshView = function() {
    this.showDetail = (this.viewSelect === 'Detail');
    this.showThumbnail = (this.viewSelect === 'Thumbnail');
    this.showFullsize = (this.viewSelect === 'Fullsize');
  };

  this.refreshView();
}
