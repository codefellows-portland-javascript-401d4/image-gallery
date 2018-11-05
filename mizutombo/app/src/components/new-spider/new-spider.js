import template from './new-spider.html';
import styles from './new-spider.scss';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

function controller() {
  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.url = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      name: this.name,
      url: this.url
    });
    // clear out controls so next spider can be added
    this.reset();
  };
}
