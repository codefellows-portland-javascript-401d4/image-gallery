import template from './image-new.html';
import styles from './image-new.scss'

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

controller.$inject = ['albumService'];

function controller(albumService) {
  this.styles = styles;

  this.reset = () => {
    this.title = '';
    this.url = '';
    this.description = '';
    this.album = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      title: this.title,
      url: this.url,
      description: this.description,
      album: this.album
    });
    this.reset();
  };

  albumService.get().then(albums => {
    this.albums = albums;
  })
}