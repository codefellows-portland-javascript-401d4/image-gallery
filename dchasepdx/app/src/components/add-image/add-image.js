import template from './add-image.html';
import styles from './add-image.scss';


export default {
  template,
  bindings: {
    addImage: '<',
    img: '<',
    albums: '<'
  },
  controller
};

function controller() {
  this.styles = styles;
  this.reset = () => {
    this.title = '';
    this.description = '';
    this.url = '';
    this.album = '';
  };
  this.reset();

  this.addNew = () => {
    this.addImage({
      title: this.title,
      description: this.description,
      url: this.url,
      album: this.album._id
    });
    this.reset();
  };
}