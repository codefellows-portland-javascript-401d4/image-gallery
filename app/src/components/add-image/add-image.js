// import template from './add-image.html';

export default {
  // template,
  bindings: {
    add: '<'
  },
  controller
};

function controller() {
  this.addNew = () => {
    this.add({
      title: this.title,
      description: this.description,
      url: this.url
    });
  };
}