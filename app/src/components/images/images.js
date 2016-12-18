import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    albumId: '<',
    myAlbums: '='
  },
  controller,
  controllerAs: 'imagesCtrl'
};

controller.$inject = ['imageService', 'albumService'];

function controller(images, albums) {

  const self = this;
  self.styles = styles;
  self.viewTypes = [ 'Details', 'Thumbnail', 'Full' ];
  self.viewType = 'Thumbnail';

  self.loading = true;

  images.get().then(rtndImages => {
    self.loading = false;
    self.imageList = rtndImages;
  });

  // if (this.albumId) {
  //   images.get(this.albumId).then(images => {
  //     this.loading = false;
  //     this.images = images;
  //   });
  // }
  // else {
  //   images.get().then(images => {
  //     this.loading = false;
  //     this.images = images;
  //   });
  // }

  self.add = image => {
    self.loading = true;

    let albumLookup = {};
    self.myAlbums.forEach((a) => {
      albumLookup[a.name] = a._id;
    });

    if (albumLookup[image.album]) {
      // TODO: replace image.album (name) with album's _id before POSTing
      image.album = albumLookup[image.album];
      images
        .add(image)
        .then(savedImage => {
          self.loading = false;
          self.imageList.push(savedImage);
        });
    }
    else {
      albums
        .add({ name: image.album, description: 'Default description - edit later' })
        .then((addedAlbum) => {
          self.myAlbums.push(addedAlbum);
          image.album = addedAlbum._id;
          images.add(image)
            .then(savedImage => {
              self.loading = false;
              self.imageList.push(savedImage);
            });
        });
    }
  };

  self.remove = image => {
    self.loading = true;
    images.remove(image._id)
      .then(() => {
        self.loading = false;
        const index = self.imageList.indexOf(image);
        if (index > -1) self.imageList.splice(index, 1);
      });
  };

  self.updateView = function() {
    self.showDetail = (self.viewType === 'Details');
    self.showThumbnail = (self.viewType === 'Thumbnail');
    self.showFull = (self.viewType === 'Full');
  };

  self.updateView();
}