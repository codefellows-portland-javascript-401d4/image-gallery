import template from './albums.html';
import styles from '../images/images.scss';

export default {
  template,
  controller
};

controller.$inject = ['albumService','imageService'];

function controller(albums, imageService) {

  this.styles = styles;

  this.loading = true;

  albums.get().then(albums => {
    this.loading = false;
    this.albums = albums;
  });

  this.add = album => {
    albums.add(album)
    .then(saved => {
      this.albums.push(saved);
    });
  };


  imageService.get().then(images => {
    this.images = images;
  });


  this.new = function() {
    this.viewNew = true;
    this.viewDetail = false;
  };

  this.detail = function() {
    this.viewDetail = true;
    this.viewNew = false;
  };



}
