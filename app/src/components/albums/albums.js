// "Albums" page ...

import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller
};

controller.$inject = ['albumService'];

function controller(albums) {

  this.styles = styles;

  albums.get() // get all albums
    .then(returnedAlbums => {
      this.albumList = returnedAlbums;
    });

  this.add = (album) => {
    albums.add(album)
      .then(saved => {
        this.albumList.push(saved);
      });
  };

  this.delete = (album) => {
    albums.delete(album)
      .then(saved => {
        this.albumList.push(saved);
      });
  };

}
