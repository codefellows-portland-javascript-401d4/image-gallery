import template from './new-subject.html';
import styles from './new-subject.scss';

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
    // clear out controls so next subject can be added
    this.reset();
  };
}
