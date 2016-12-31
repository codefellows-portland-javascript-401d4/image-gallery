// "Albums" page ...

import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller
};

controller.$inject = ['albumService'];

function controller(albumService) {

  this.styles = styles;

  this.loading = true;

  this.album = true;

  // // call the GET to load all albums
  // albumService.get().then(albums => {
  this.loading = false;
  //   this.albums = albums;
  // });

  // remove this album
  this.remove = album => {
    this.loading = true;
    albumService.remove(album._id)
      .then(() => {
        this.loading = false;
        // after server has updated data, modify in-memory array
        const index = this.albums.indexOf(album);
        if (index > -1) this.albums.splice(index, 1);
      });
  };

  // add an album
  this.add = album => {
    this.loading = true;
    albumService.add(album)
      .then(saved => {
        this.loading = false;
        // push to in-memory array
        this.albums.push(saved);
      });
  };
}
