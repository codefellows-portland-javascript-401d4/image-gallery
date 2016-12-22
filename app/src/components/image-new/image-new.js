import template from './image-new.html';

export default {
  template, 
  bindings: {
    image: '=',
    add: '<'
  },
  controller
};

function controller() {
  // this.styles = styles;

  this.reset = () => {
    this.title = '';
    this.description = '';
    this.url = '';
  };

  this.addNew = () => {
    this.add({
      title: this.title,
      description: this.description,
      url: this.url
    });

    this.reset();
  };
}
