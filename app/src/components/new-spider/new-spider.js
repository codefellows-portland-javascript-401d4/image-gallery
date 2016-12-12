import template from './new-spider.html';
import styles from './new-spider.css';

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
    this.type = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      name: this.name,
      type: this.type
    });
    // clear out controls to next spider can be added
    this.reset();
  };
}
