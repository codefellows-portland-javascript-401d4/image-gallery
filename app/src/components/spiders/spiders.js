import template from './spiders.html';
import styles from './spiders.css';

export default {
  template,
  controller
};

controller.$inject = ['spiderService'];

function controller(spiders) {

  this.styles = styles;

  this.loading = true;

  // call the GET to load all spiders
  spiders.get().then(spiders => {
    this.loading = false;
    this.spiders = spiders;
  });

  // remove this spider
  this.remove = spider => {
    this.loading = true;
    spiders.remove(spider._id)
      .then(() => {
        this.loading = false;
        // after server has updated data, modify in-memory array
        const index = this.spiders.indexOf(spider);
        if (index > -1) this.spiders.splice(index, 1);
      });
  };

  // add a spider
  this.add = spider => {
    this.loading = true;
    spiders.add(spider)
      .then(saved => {
        this.loading = false;
        // push to in-memory array
        this.spiders.push(saved);
      });
  };
}
