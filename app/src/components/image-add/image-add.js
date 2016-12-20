import template from './image-add.html';
import styles from './image-add.scss';

export default {
  template,
  bindings: {
    addImage: '<',
    albums: '<'
  },
  controller,
  controllerAs: '$addImage'
};

function controller() {
  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.description = '';
    this.url = '';
    this.album = '';
  };

  this.reset();

  this.addOneImage = () => {
    // console.log('ablums', this.albums, 'album', this.album);
    // const test = this.albums.findIndex(elem => {
    //   elem.name === this.album.name;
    // });
    // if (test !== -1) {
    this.addImage(
      {
        name: this.name,
        description: this.description,
        url: this.url,
        albumId: this.myAlbum
      }
        );
    // }else {
    //   alert('pick a valid album name!');
    // }

    this.reset();
  };

}