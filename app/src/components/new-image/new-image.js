import template from './new-image.html';
import styles from './new-image.scss';

export default {
  template,
  bindings: {
    add: '<',
    albums: '='
  },
  controller,
  controllerAs: 'app'
};

function controller () {

  this.styles = styles;

  this.reset = () => {
    this.title = '';
    this.description = '';
    this.url = '';
    this.fullImage = '';
    this.thumbnail = '';
    this.selection = '';
  };

  this.reset();

  this.addNew = () => {
    console.log('albums1', this.selection._id);
    this.add({
      title: this.title,
      description: this.description,
      url: this.url,
      fullImage: this.fullImage,
      thumbnail: this.thumbnail,
      albumId: this.selection._id
    });
    this.reset();
  };
}