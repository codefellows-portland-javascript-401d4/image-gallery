import template from './new-image.html';
import styles from './new-image.css';

export default {
  template,
  bindings: {
    add: '&'
  },
  controller
};

function controller() {
  this.styles = styles;

  this.resetFields = () => {
    this.title = '';
    this.url = '';
    this.desc = '';
  };

  this.addNew = () => {
    this.add({
      title: this.title,
      url: this.url,
      desc: this.desc
    });
    this.resetFields();
  };
  console.log('this', this.add);
  this.add();
}