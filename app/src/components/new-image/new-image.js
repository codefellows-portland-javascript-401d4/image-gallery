import template from './new-image.html';
import styles from './new-image.scss';

export default {
  template,
  bindings: {
    add: '<',
    remove: '<'
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
  };

  this.reset();

  this.addNew = () => {
    this.add({
      title: this.title,
      description: this.description,
      url: this.url,
      fullImage: this.fullImage,
      thumbnail: this.thumbnail
    });
    this.reset();
  };

  this.delete = () => {
    this.remove(this.image);
  };
}